let selectedCategory = "All";
let selectedMethod = null;
let currentServings = 1;
let editingId = null;
let pendingImageDataUrl = null;
let favoritesOnly = false;

const STORAGE_KEY = "cookingApp.userRecipes";
const FAVORITES_KEY = "cookingApp.favorites";
const SHOPPING_KEY = "cookingApp.shoppingList";

const METHOD_OPTIONS = [
  { key: "Stovetop", label: "Stovetop" },
  { key: "Oven", label: "Oven" },
  { key: "Air Fryer", label: "Air Fryer" },
  { key: "Slow Cooker", label: "Slow Cooker" },
  { key: "Recteq", label: "Recteq Smoker" },
  { key: "Instant Pot", label: "Instant Pot" },
  { key: "No Cook", label: "No Cook" }
];

const AISLE_CATEGORIES = [
  { name: "Produce", keywords: ["onion", "garlic", "celery", "carrot", "potato", "lemon", "lime", "cabbage", "lettuce", "tomato", "bell pepper", "jalapeno", "jalapeño", "poblano", "banana pepper", "cilantro", "parsley", "broccoli", "spinach", "mushroom", "apple", "avocado", "cucumber", "scallion", "green onion", "ginger", "fresh herbs", "corn"] },
  { name: "Meat & Seafood", keywords: ["chicken", "beef", "pork", "turkey", "bacon", "sausage", "shrimp", "fish", "salmon", "steak", "ground beef", "ribs", "thigh", "breast", "roast", "chuck", "brisket", "cutlet"] },
  { name: "Dairy & Eggs", keywords: ["cheese", "butter", "milk", "cream", "yogurt", "egg", "sour cream", "parmesan", "mozzarella"] },
  { name: "Bakery & Grains", keywords: ["bread", "bun", "tortilla", "rice", "pasta", "flour", "oats", "noodle", "breadcrumb"] },
  { name: "Pantry & Canned", keywords: ["broth", "stock", "can ", "cans ", "sauce", "vinegar", "oil", "sugar", "honey", "syrup", "tomato paste", "tomato juice", "beans", "gravy", "marinara", "mayonnaise", "mustard"] },
  { name: "Spices & Seasoning", keywords: ["salt", "pepper", "paprika", "cumin", "chili powder", "garlic powder", "onion powder", "cayenne", "rub", "seasoning", "oregano", "basil", "thyme", "cinnamon"] },
  { name: "Frozen", keywords: ["frozen"] }
];

const FLAT_AISLE_KEYWORDS = AISLE_CATEGORIES
  .flatMap(g => g.keywords.map(k => ({ keyword: k, category: g.name })))
  .sort((a, b) => b.keyword.length - a.keyword.length);

const $ = (id) => document.getElementById(id);

/* ============================================================
   Combined recipe list: recipes.js (base) merged with anything
   added or edited in this browser. Editing a built-in recipe
   stores an "override" in userRecipes under the same id.
   ============================================================ */

let userRecipes = loadUserRecipes();
let allRecipes = [];
refreshAllRecipes();
let selectedRecipe = allRecipes[0];

let favorites = loadFavorites();
let shoppingItems = loadShoppingList();

function loadUserRecipes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Could not read saved recipes:", e);
    return [];
  }
}

function saveUserRecipes() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userRecipes));
  } catch (e) {
    console.error("Could not save recipe to this browser:", e);
    alert("Could not save — this browser's storage may be full (large photos take up space).");
  }
}

function refreshAllRecipes() {
  const overrideMap = new Map(userRecipes.map(r => [r.id, r]));
  const merged = recipes.map(base => overrideMap.get(base.id) || base);
  const newOnes = userRecipes.filter(r => !recipes.some(b => b.id === r.id));
  allRecipes = [...merged, ...newOnes];
}

function isBaseRecipeId(id) {
  return recipes.some(b => b.id === id);
}

function nextRecipeId() {
  const ids = allRecipes.map(r => r.id);
  return (ids.length ? Math.max(...ids) : 0) + 1;
}

function recipeTag(r) {
  if (r.isUserAdded) return "Your Recipe";
  if (isBaseRecipeId(r.id) && userRecipes.some(u => u.id === r.id)) return "Edited";
  return null;
}

/* ============================================================
   Favorites
   ============================================================ */

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch (e) {
    return new Set();
  }
}

function saveFavorites() {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify([...favorites]));
}

function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  saveFavorites();
  renderGrid();
  renderDetail();
}

/* ============================================================
   Ingredient quantity scaling
   Parses a leading quantity (whole, decimal, fraction, mixed
   number, or a range like "1–2") from an ingredient string and
   scales it, leaving the rest of the text untouched.
   ============================================================ */

const QTY = "(\\d+\\s+\\d+\\/\\d+|\\d+\\/\\d+|\\d*\\.\\d+|\\d+)";
const LEADING_QTY_RE = new RegExp(`^${QTY}(?:(\\s*[–-]\\s*)${QTY})?`);

function parseQtyToken(token) {
  token = token.trim();
  if (token.includes(" ")) {
    const [whole, frac] = token.split(" ");
    return parseInt(whole, 10) + parseQtyToken(frac);
  }
  if (token.includes("/")) {
    const [n, d] = token.split("/").map(Number);
    return n / d;
  }
  return parseFloat(token);
}

function formatQty(value) {
  if (!isFinite(value) || value <= 0) return "0";
  const whole = Math.floor(value + 1e-9);
  const frac = value - whole;
  const fracMap = [
    [0, ""],
    [1 / 4, "¼"],
    [1 / 3, "⅓"],
    [1 / 2, "½"],
    [2 / 3, "⅔"],
    [3 / 4, "¾"],
    [1, ""]
  ];
  let best = fracMap[0];
  for (const entry of fracMap) {
    if (Math.abs(entry[0] - frac) < Math.abs(best[0] - frac)) best = entry;
  }
  let wholeOut = whole;
  let fracOut = best[1];
  if (best[0] === 1) { wholeOut += 1; fracOut = ""; }
  if (Math.abs(best[0] - frac) > 0.06) {
    const rounded = Math.round(value * 100) / 100;
    return String(rounded);
  }
  if (wholeOut === 0 && fracOut === "") return "0";
  if (wholeOut === 0) return fracOut;
  if (fracOut === "") return `${wholeOut}`;
  return `${wholeOut} ${fracOut}`;
}

function scaleIngredientText(text, factor) {
  if (!factor || factor === 1) return text;
  const match = text.match(LEADING_QTY_RE);
  if (!match) return text;

  const qty1 = parseQtyToken(match[1]);
  const scaled1 = formatQty(qty1 * factor);

  let out = scaled1;
  if (match[3]) {
    const qty2 = parseQtyToken(match[3]);
    const scaled2 = formatQty(qty2 * factor);
    out += match[2].trim().length ? match[2] : "–";
    out += scaled2;
  }

  return out + text.slice(match[0].length);
}

function scaledIngredients(recipe, servings) {
  const factor = servings / recipe.servings;
  return recipe.ingredients.map(i => scaleIngredientText(i, factor));
}

/* ============================================================
   Recipe data helpers
   ============================================================ */

function methodNames(recipe) {
  return Object.keys(recipe.methods || {});
}

function recipeInstructions(recipe) {
  return methodNames(recipe)
    .flatMap(method => recipe.methods[method].instructions || [])
    .join(" ");
}

function recipeMethodSummary(recipe) {
  return methodNames(recipe).join(", ");
}

function uniqueValues(key) {
  if (key === "method") {
    return ["All", ...new Set(allRecipes.flatMap(r => methodNames(r)))];
  }
  return ["All", ...new Set(allRecipes.map(r => r[key]).filter(Boolean))];
}

function fillSelect(id, values) {
  const el = $(id);
  el.innerHTML = values.map(v => `<option value="${v}">${v}</option>`).join("");
}

function sidebarCategories() {
  return [...document.querySelectorAll(".nav[data-category]")]
    .map(b => b.dataset.category)
    .filter(c => c !== "All");
}

function categorySuggestions() {
  return [...new Set([...sidebarCategories(), ...uniqueValues("category").filter(c => c !== "All")])];
}

/* Custom autocomplete, built once per field. Replaces native <datalist>,
   which renders as a broken, non-scrollable 3-item strip on iOS Safari.
   getOptions is a live function (not a static array) so suggestions stay
   current as recipes/categories are added, without needing to rebuild
   the dropdown each time initFilters() runs. */
function setupAutocomplete(inputId, getOptions) {
  const input = $(inputId);
  if (!input) return;

  // Safari's native "previously typed here" autofill bar (the plain grey
  // strip above the keyboard) largely ignores autocomplete="off" and
  // keys off the field's name instead. Giving it a fresh random name on
  // every load means Safari has never seen it before, so it has nothing
  // to suggest — leaving the field free for our own dropdown below.
  input.setAttribute("autocomplete", "off");
  input.name = `nofill-${inputId}-${Math.random().toString(36).slice(2, 8)}`;

  // Appended to <body> and positioned with `fixed` (viewport-relative)
  // rather than nested inside the modal — nesting it inside
  // .modal-content, which has its own overflow:auto + max-height,
  // caused the browser to clip the dropdown at the modal's boundary
  // and made scrolling inside it fight with the modal's own scroll.
  const dropdown = document.createElement("div");
  dropdown.className = "autocomplete-dropdown hidden";
  document.body.appendChild(dropdown);

  function position() {
    const rect = input.getBoundingClientRect();
    // visualViewport reflects the space actually visible above an open
    // iOS keyboard; window.innerHeight does not, which is what let the
    // dropdown extend underneath the keyboard and hide the last items.
    const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
    const margin = 8;
    const spaceBelow = viewportHeight - rect.bottom - margin;
    const spaceAbove = rect.top - margin;
    const preferredMax = 240;
    const minUsable = 120;

    dropdown.style.left = `${rect.left}px`;
    dropdown.style.width = `${rect.width}px`;

    if (spaceBelow >= minUsable || spaceBelow >= spaceAbove) {
      dropdown.style.bottom = "";
      dropdown.style.top = `${rect.bottom + 4}px`;
      dropdown.style.maxHeight = `${Math.max(minUsable, Math.min(preferredMax, spaceBelow))}px`;
    } else {
      dropdown.style.top = "";
      dropdown.style.bottom = `${viewportHeight - rect.top + 4}px`;
      dropdown.style.maxHeight = `${Math.max(minUsable, Math.min(preferredMax, spaceAbove))}px`;
    }
  }

  function render() {
    const query = input.value.trim().toLowerCase();
    const options = getOptions().filter(Boolean);
    const matches = query ? options.filter(v => v.toLowerCase().includes(query)) : options;

    if (!matches.length) {
      dropdown.classList.add("hidden");
      dropdown.innerHTML = "";
      return;
    }
    position();
    dropdown.innerHTML = matches.slice(0, 20)
      .map(v => `<div class="autocomplete-item">${v}</div>`)
      .join("");
    dropdown.classList.remove("hidden");
  }

  function hide() {
    dropdown.classList.add("hidden");
  }

  function pick(e) {
    const item = e.target.closest(".autocomplete-item");
    if (!item) return;
    input.value = item.textContent;
    hide();
    input.dispatchEvent(new Event("change"));
  }

  input.addEventListener("focus", render);
  input.addEventListener("click", render);
  input.addEventListener("input", render);

  // mousedown fires before blur, so a desktop click registers before the
  // dropdown gets hidden by the blur handler below. No scroll-gesture
  // conflict on desktop, so this is safe to fire on mousedown directly.
  dropdown.addEventListener("mousedown", pick);

  // On touch, selecting on touchstart (as this used to do) fires the
  // instant a finger lands — including the start of a scroll swipe. That
  // hides the dropdown mid-gesture, which is why swiping down to reach
  // items below the fold (e.g. "Desserts") never worked: touching down
  // anywhere in the list immediately picked whatever was under the
  // finger and closed it before the swipe could scroll anything. Track
  // movement instead, and only treat it as a selection if the finger
  // didn't move — a real scroll passes through untouched.
  let touchStartY = null;
  let touchMoved = false;
  const touchMoveThreshold = 8; // px of vertical travel that counts as "scrolling, not tapping"

  dropdown.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
    touchMoved = false;
  }, { passive: true });

  dropdown.addEventListener("touchmove", (e) => {
    if (touchStartY !== null && Math.abs(e.touches[0].clientY - touchStartY) > touchMoveThreshold) {
      touchMoved = true;
    }
  }, { passive: true });

  dropdown.addEventListener("touchend", (e) => {
    if (touchMoved) return; // was a scroll — let it scroll, don't select
    const touch = e.changedTouches[0];
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    const item = el && el.closest(".autocomplete-item");
    if (!item) return;
    input.value = item.textContent;
    hide();
    input.dispatchEvent(new Event("change"));
  }, { passive: true });

  input.addEventListener("blur", () => setTimeout(hide, 150));

  // If the modal scrolls while the dropdown is open, just close it rather
  // than let it drift away from the field.
  const modalContent = input.closest(".modal-content");
  if (modalContent) modalContent.addEventListener("scroll", hide);

  // The iOS keyboard opening/closing fires a visualViewport resize AFTER
  // focus already ran render()/position() once against the pre-keyboard
  // (too-tall) viewport height. If we just hide() here, the shrink/flip
  // math in position() never actually gets to run against the real,
  // keyboard-adjusted height — so re-run position() instead, and only
  // while the dropdown is actually open.
  function reflow() {
    if (!dropdown.classList.contains("hidden")) position();
  }
  window.addEventListener("resize", reflow);
  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", reflow);
    window.visualViewport.addEventListener("scroll", reflow);
  }
}

function initFilters() {
  const steps = [
    ["categoryFilter (select)", () => fillSelect("categoryFilter", uniqueValues("category"))],
    ["proteinFilter (select)", () => fillSelect("proteinFilter", uniqueValues("protein"))],
    ["sauceFilter (select)", () => fillSelect("sauceFilter", uniqueValues("sauce"))],
    ["carbFilter (select)", () => fillSelect("carbFilter", uniqueValues("carb"))],
    ["methodFilter (select)", () => fillSelect("methodFilter", uniqueValues("method"))]
  ];

  steps.forEach(([label, fn]) => {
    try {
      fn();
    } catch (e) {
      console.error(`initFilters: failed to populate ${label}:`, e);
    }
  });
}

function filteredRecipes() {
  const search = $("search").value.toLowerCase();
  const category = $("categoryFilter").value;
  const protein = $("proteinFilter").value;
  const sauce = $("sauceFilter").value;
  const carb = $("carbFilter").value;
  const method = $("methodFilter").value;

  return allRecipes.filter(r => {
    const methods = methodNames(r);
    const searchableText = [
      r.name,
      r.category,
      r.protein,
      r.sauce,
      r.carb,
      recipeMethodSummary(r),
      r.ingredients.join(" "),
      recipeInstructions(r),
      (r.notes || []).join(" ")
    ].join(" ").toLowerCase();

    const matchesNav = selectedCategory === "All" || r.category === selectedCategory;
    const matchesCategory = category === "All" || r.category === category;
    const matchesProtein = protein === "All" || r.protein === protein;
    const matchesSauce = sauce === "All" || r.sauce === sauce;
    const matchesCarb = carb === "All" || r.carb === carb;
    const matchesMethod = method === "All" || methods.includes(method);
    const matchesSearch = !search || searchableText.includes(search);
    const matchesFavorite = !favoritesOnly || favorites.has(r.id);

    return matchesNav && matchesCategory && matchesProtein && matchesSauce && matchesCarb && matchesMethod && matchesSearch && matchesFavorite;
  });
}

/* ============================================================
   Rendering: recipe grid
   ============================================================ */

function renderGrid() {
  const matches = filteredRecipes();
  $("resultTitle").textContent = `Recipes (${matches.length})`;

  $("recipeGrid").innerHTML = matches.map(r => {
    const tag = recipeTag(r);
    const isFav = favorites.has(r.id);
    return `
    <article class="card ${selectedRecipe && selectedRecipe.id === r.id ? "selected" : ""}" onclick="selectRecipe(${r.id})">
      <button class="card-favorite ${isFav ? "active" : ""}" onclick="event.stopPropagation(); toggleFavorite(${r.id})" aria-label="Toggle favorite">${isFav ? "♥" : "♡"}</button>
      ${r.isUserAdded ? `<button class="card-delete" onclick="event.stopPropagation(); deleteUserRecipe(${r.id})" aria-label="Delete recipe">×</button>` : ""}
      <div class="card-img">
        ${ r.image
            ? `<img src="${r.image}" alt="${r.name}">`
            : `<div class="emoji">${r.emoji || "🍽️"}</div>`
        }
      </div>
      <div class="card-body">
        <h3>${r.name}</h3>
        <div class="tags">
          <span class="tag">${r.protein}</span>
          <span class="tag">${r.sauce}</span>
          <span class="tag">${r.carb}</span>
          ${tag ? `<span class="tag" style="background:#fdf0d5;color:#7a461f;border-color:#eac57a;">${tag}</span>` : ""}
        </div>
        <div class="method-line">🔥 ${recipeMethodSummary(r)}</div>
        <small>👥 ${r.servings} servings &nbsp; ${r.freezerFriendly ? "❄️ Freezer Friendly" : ""}</small>
      </div>
    </article>
  `; }).join("");

  if (matches.length && !matches.find(r => r.id === selectedRecipe?.id)) {
    selectRecipe(matches[0].id, true);
  }

  if (!matches.length) {
    $("recipeGrid").innerHTML = `<p>No recipes found.</p>`;
  }
}

/* ============================================================
   Rendering: recipe detail, method picker, servings slider
   ============================================================ */

function preferredMethodFor(recipe) {
  const filterMethod = $("methodFilter")?.value;
  const methods = methodNames(recipe);
  if (filterMethod && filterMethod !== "All" && methods.includes(filterMethod)) return filterMethod;
  if (selectedMethod && methods.includes(selectedMethod)) return selectedMethod;
  return methods[0];
}

function selectRecipe(id, skipGridRender = false) {
  selectedRecipe = allRecipes.find(r => r.id === id);
  if (!selectedRecipe) return;
  selectedMethod = preferredMethodFor(selectedRecipe);
  currentServings = selectedRecipe.servings;
  renderDetail();
  if (!skipGridRender) renderGrid();

  // On mobile/tablet the grid and detail are stacked, not side by side —
  // jump to the recipe so tapping a card doesn't leave you scrolled up
  // in the grid. Desktop keeps them side-by-side, so no scroll needed.
  // Only fires on a direct tap, not internal reselects (skipGridRender=true).
  if (!skipGridRender && window.innerWidth <= 1024) {
    scrollToDetail();
  }
}

/* iOS Safari can silently drop or mistime scrollIntoView() when it's
   called right after a large innerHTML re-render (like the card grid
   above). Deferring to the next two paint frames and computing the
   scroll position manually is far more reliable there than relying on
   scrollIntoView's built-in behavior. */
function scrollToDetail() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const el = $("recipeDetail");
      if (!el) return;
      const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const top = el.getBoundingClientRect().top + window.pageYOffset - 76;
      window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    });
  });
}

function changeMethod(method) {
  selectedMethod = method;
  renderDetail();
}

function renderMethodButtons(recipe) {
  return methodNames(recipe).map(method => `
    <button class="method-btn ${method === selectedMethod ? "active" : ""}" onclick="changeMethod('${method}')">
      ${method}
      <span class="method-time">⏱ ${recipe.methods[method].cook}</span>
    </button>
  `).join("");
}

function sliderMaxFor(recipe) {
  return Math.min(48, Math.max(recipe.servings * 3, 12));
}

/* Full detail re-render: called on recipe/method change. */
function renderDetail() {
  const r = selectedRecipe;
  if (!r) {
    $("recipeDetail").innerHTML = "<p>Select a recipe.</p>";
    return;
  }

  selectedMethod = preferredMethodFor(r);
  const activeMethod = r.methods[selectedMethod];
  const hasMultipleMethods = methodNames(r).length > 1;
  const sliderMax = sliderMaxFor(r);
  const isFav = favorites.has(r.id);
  const tag = recipeTag(r);

  $("recipeDetail").innerHTML = `
    <div class="detail-head">
      <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px;">
        <h2>${r.name}</h2>
        <button class="detail-favorite ${isFav ? "active" : ""}" onclick="toggleFavorite(${r.id})" aria-label="Toggle favorite">${isFav ? "♥" : "♡"}</button>
      </div>
      <div class="badges">
        <span class="badge" id="servingsBadge">👥 Servings: ${currentServings}</span>
        <span class="badge">⏱ Prep: ${r.prep}</span>
        <span class="badge">🔥 ${selectedMethod}: ${activeMethod.cook}</span>
        ${r.mealPrep ? `<span class="badge green">Meal Prep</span>` : ""}
        ${r.freezerFriendly ? `<span class="badge blue">❄️ Freezer Friendly</span>` : ""}
        ${tag ? `<span class="badge custom">${tag}</span>` : ""}
      </div>

      <div class="servings-control">
        <label for="servingsSlider">👥 Adjust Servings</label>
        <div class="servings-row">
          <button type="button" onclick="adjustServings(-1)" aria-label="Fewer servings">–</button>
          <input type="range" id="servingsSlider" min="1" max="${sliderMax}" step="1"
                 value="${currentServings}" oninput="onServingsInput(this.value)">
          <button type="button" onclick="adjustServings(1)" aria-label="More servings">+</button>
          <span class="servings-value" id="servingsValue">${currentServings}</span>
        </div>
        ${currentServings !== r.servings ? `<button type="button" class="servings-reset" onclick="resetServings()">Reset to original (${r.servings})</button>` : ""}
      </div>
    </div>

    ${hasMultipleMethods ? `
    <div class="method-picker">
      <strong>Choose cooking method:</strong>
      <div class="method-buttons">${renderMethodButtons(r)}</div>
    </div>` : ""}

    <div class="detail-body">
      <div>
        <h3>Ingredients</h3>
        <ul id="ingredientsList">${scaledIngredients(r, currentServings).map(i => `<li>${i}</li>`).join("")}</ul>
        <p class="scale-note">Quantities scale automatically with servings. Double-check seasoning to taste.</p>

        <div class="notes-box">
          <h3>Notes</h3>
          <ul>${(r.notes || []).map(n => `<li>${n}</li>`).join("")}</ul>
        </div>
      </div>

      <div>
        <h3>${selectedMethod} Instructions</h3>
        <ol class="steps">${activeMethod.instructions.map(s => `<li>${s}</li>`).join("")}</ol>
      </div>
    </div>

    <div class="pairs-box">
      <h3>👍 Pairs Well With</h3>
      <div class="tags">${(r.pairsWith || []).map(p => `<span class="tag">${p}</span>`).join("")}</div>
    </div>

    <div class="actions">
      <button class="primary" onclick="addToShoppingList(${r.id})">🛒 Add to Shopping List</button>
      <button onclick="openEditRecipeModal(${r.id})">✎ Edit Recipe</button>
      <button onclick="alert('Meal plan coming next.')">📦 Add to Meal Plan</button>
      <button onclick="window.print()">🖨 Print Recipe</button>
    </div>
  `;
}

/* Lightweight update while dragging the slider: only touches the
   ingredient list, servings badge/value and reset button, so the
   range input itself is never replaced mid-drag. */
function updateScaledDisplay() {
  const r = selectedRecipe;
  const list = $("ingredientsList");
  if (list) {
    list.innerHTML = scaledIngredients(r, currentServings).map(i => `<li>${i}</li>`).join("");
  }
  const badge = $("servingsBadge");
  if (badge) badge.textContent = `👥 Servings: ${currentServings}`;
  const val = $("servingsValue");
  if (val) val.textContent = currentServings;
}

function onServingsInput(value) {
  currentServings = Math.max(1, parseInt(value, 10) || 1);
  updateScaledDisplay();
  syncResetButton();
}

function adjustServings(delta) {
  const r = selectedRecipe;
  const max = sliderMaxFor(r);
  currentServings = Math.min(max, Math.max(1, currentServings + delta));
  const slider = $("servingsSlider");
  if (slider) slider.value = currentServings;
  updateScaledDisplay();
  syncResetButton();
}

function resetServings() {
  currentServings = selectedRecipe.servings;
  const slider = $("servingsSlider");
  if (slider) slider.value = currentServings;
  updateScaledDisplay();
  syncResetButton();
}

function syncResetButton() {
  const controls = document.querySelector(".servings-control");
  if (!controls) return;
  let resetBtn = controls.querySelector(".servings-reset");
  const isDefault = currentServings === selectedRecipe.servings;
  if (isDefault && resetBtn) {
    resetBtn.remove();
  } else if (!isDefault && !resetBtn) {
    resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "servings-reset";
    resetBtn.textContent = `Reset to original (${selectedRecipe.servings})`;
    resetBtn.onclick = resetServings;
    controls.appendChild(resetBtn);
  }
}

/* ============================================================
   Shopping list — persistent, grouped by aisle
   ============================================================ */

function loadShoppingList() {
  try {
    const raw = localStorage.getItem(SHOPPING_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveShoppingList() {
  localStorage.setItem(SHOPPING_KEY, JSON.stringify(shoppingItems));
}

function categorizeIngredient(text) {
  const lower = text.toLowerCase();
  const match = FLAT_AISLE_KEYWORDS.find(({ keyword }) => lower.includes(keyword));
  return match ? match.category : "Other";
}

function addToShoppingList(id) {
  const r = allRecipes.find(x => x.id === id);
  const factor = (r.id === selectedRecipe.id ? currentServings : r.servings) / r.servings;
  const items = r.ingredients.map(i => scaleIngredientText(i, factor));
  let added = 0;
  items.forEach(item => {
    if (!shoppingItems.some(s => s.text.toLowerCase() === item.toLowerCase())) {
      shoppingItems.push({ text: item, checked: false, category: categorizeIngredient(item) });
      added++;
    }
  });
  saveShoppingList();
  alert(`${r.name} added to shopping list${added < items.length ? " (some items were already on it)" : ""}.`);
}

function toggleShoppingItem(idx) {
  shoppingItems[idx].checked = !shoppingItems[idx].checked;
  saveShoppingList();
  renderShopping();
}

function removeShoppingItem(idx) {
  shoppingItems.splice(idx, 1);
  saveShoppingList();
  renderShopping();
}

function renderShopping() {
  if (!shoppingItems.length) {
    $("shoppingList").innerHTML = `<p>No items yet. Add a recipe first.</p>`;
    return;
  }

  const order = [...AISLE_CATEGORIES.map(g => g.name), "Other"];
  const groups = {};
  shoppingItems.forEach((item, idx) => {
    const cat = item.category || "Other";
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push({ ...item, idx });
  });

  $("shoppingList").innerHTML = order
    .filter(cat => groups[cat] && groups[cat].length)
    .map(cat => `
      <div class="shopping-group">
        <h3>${cat}</h3>
        ${groups[cat].map(item => `
          <div class="shopping-row ${item.checked ? "checked" : ""}">
            <label>
              <input type="checkbox" ${item.checked ? "checked" : ""} onchange="toggleShoppingItem(${item.idx})">
              ${item.text}
            </label>
            <button class="shopping-row-remove" onclick="removeShoppingItem(${item.idx})" aria-label="Remove item">×</button>
          </div>
        `).join("")}
      </div>
    `).join("");
}

/* ============================================================
   Add / Edit Recipe form
   ============================================================ */

function buildMethodFieldsets() {
  $("methodFieldsets").innerHTML = METHOD_OPTIONS.map(m => `
    <div class="method-fieldset" data-method="${m.key}">
      <label class="check-inline">
        <input type="checkbox" class="method-check" data-method="${m.key}"> ${m.label}
      </label>
      <div class="method-fieldset-body">
        <label>Cook time (e.g. "20–25 min")</label>
        <input type="text" class="method-cook" placeholder="20–25 min">
        <label>Instructions (one step per line)</label>
        <textarea class="method-instructions" rows="4" placeholder="Heat oil in a large skillet over medium-high heat.&#10;Cook 6-8 minutes per side."></textarea>
      </div>
    </div>
  `).join("");

  document.querySelectorAll(".method-check").forEach(cb => {
    cb.addEventListener("change", () => {
      const body = cb.closest(".method-fieldset").querySelector(".method-fieldset-body");
      body.classList.toggle("visible", cb.checked);
    });
  });
}

function linesToArray(text) {
  return text.split("\n").map(s => s.trim()).filter(Boolean);
}

function clearFormFields() {
  $("addRecipeForm").reset();
  document.querySelectorAll(".method-fieldset-body").forEach(b => b.classList.remove("visible"));
  pendingImageDataUrl = null;
  $("f-image-file").value = "";
  $("imagePreviewWrap").classList.add("hidden");
}

function resetFormChrome() {
  $("addRecipeError").classList.add("hidden");
  $("addRecipeForm").classList.remove("hidden");
  $("addRecipeSuccess").classList.add("hidden");
}

function setModalMode(mode, r) {
  if (mode === "edit") {
    $("addRecipeModalTitle").textContent = "Edit Recipe";
    $("addRecipeSubmitBtn").textContent = "Save Changes";
    const canReset = isBaseRecipeId(r.id) && userRecipes.some(u => u.id === r.id);
    $("resetOverrideBtn").classList.toggle("hidden", !canReset);
  } else {
    $("addRecipeModalTitle").textContent = "Add a Recipe";
    $("addRecipeSubmitBtn").textContent = "Save Recipe";
    $("resetOverrideBtn").classList.add("hidden");
  }
}

function showImagePreview(src) {
  $("f-image-preview").src = src;
  $("imagePreviewWrap").classList.remove("hidden");
}

function populateFormForRecipe(r) {
  $("f-name").value = r.name || "";
  $("f-servings").value = r.servings || 1;
  $("f-category").value = r.category || "";
  $("f-protein").value = r.protein || "";
  $("f-sauce").value = r.sauce || "";
  $("f-carb").value = r.carb || "";
  $("f-prep").value = r.prep || "";
  $("f-emoji").value = r.emoji || "";
  $("f-mealprep").checked = !!r.mealPrep;
  $("f-freezer").checked = !!r.freezerFriendly;
  $("f-ingredients").value = (r.ingredients || []).join("\n");
  $("f-notes").value = (r.notes || []).join("\n");
  $("f-pairs").value = (r.pairsWith || []).join(", ");

  if (r.image) {
    pendingImageDataUrl = r.image;
    showImagePreview(r.image);
  }

  document.querySelectorAll(".method-fieldset").forEach(fs => {
    const key = fs.dataset.method;
    const methodData = (r.methods || {})[key];
    const checkbox = fs.querySelector(".method-check");
    const body = fs.querySelector(".method-fieldset-body");
    if (methodData) {
      checkbox.checked = true;
      body.classList.add("visible");
      fs.querySelector(".method-cook").value = methodData.cook || "";
      fs.querySelector(".method-instructions").value = (methodData.instructions || []).join("\n");
    } else {
      checkbox.checked = false;
      body.classList.remove("visible");
    }
  });
}

function resetAddRecipeForm() {
  clearFormFields();
  resetFormChrome();
  editingId = null;
  setModalMode("add");
}

function openAddRecipeModal() {
  resetAddRecipeForm();
  $("addRecipeModal").classList.remove("hidden");
  closeSidebar();
}

function openEditRecipeModal(id) {
  const r = allRecipes.find(x => x.id === id);
  if (!r) return;
  clearFormFields();
  resetFormChrome();
  editingId = id;
  populateFormForRecipe(r);
  setModalMode("edit", r);
  $("addRecipeModal").classList.remove("hidden");
  closeSidebar();
}

function closeAddRecipeModal() {
  $("addRecipeModal").classList.add("hidden");
}

/* Resize an uploaded photo client-side before it goes into
   localStorage, so a full-resolution phone photo doesn't blow
   past the browser's storage quota. */
function resizeImageToDataUrl(file, maxDim = 900, quality = 0.72) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > height && width > maxDim) {
          height = Math.round(height * maxDim / width);
          width = maxDim;
        } else if (height > maxDim) {
          width = Math.round(width * maxDim / height);
          height = maxDim;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/* Guards against near-duplicate categories/tags from small typing
   differences — a curly "smart quote" instead of a straight one
   (common on iPhone), extra whitespace, or different casing. If what
   was typed is a case/punctuation-insensitive match for an existing
   value, snap to that value's exact canonical spelling so it still
   files under the same bucket instead of silently creating a new one. */
function normalizeForCompare(s) {
  return s.trim().toLowerCase().replace(/[\u2018\u2019\u02BC]/g, "'");
}

function canonicalize(input, knownValues) {
  const cleaned = input.trim();
  if (!cleaned) return cleaned;
  const match = knownValues.find(v => normalizeForCompare(v) === normalizeForCompare(cleaned));
  return match || cleaned;
}

function handleAddRecipeSubmit(e) {
  e.preventDefault();

  const name = $("f-name").value.trim();
  const category = canonicalize($("f-category").value, categorySuggestions());
  const servings = parseInt($("f-servings").value, 10);
  const ingredients = linesToArray($("f-ingredients").value);

  const methods = {};
  document.querySelectorAll(".method-fieldset").forEach(fs => {
    const key = fs.dataset.method;
    const checked = fs.querySelector(".method-check").checked;
    if (!checked) return;
    const cook = fs.querySelector(".method-cook").value.trim();
    const instructions = linesToArray(fs.querySelector(".method-instructions").value);
    if (cook && instructions.length) {
      methods[key] = { cook, instructions };
    }
  });

  const errors = [];
  if (!name) errors.push("Recipe name is required.");
  if (!category) errors.push("Category is required.");
  if (!servings || servings < 1) errors.push("Servings must be at least 1.");
  if (!ingredients.length) errors.push("Add at least one ingredient.");
  if (!Object.keys(methods).length) errors.push("Check at least one cooking method and fill in its cook time and instructions.");

  if (errors.length) {
    const errEl = $("addRecipeError");
    errEl.innerHTML = errors.join("<br>");
    errEl.classList.remove("hidden");
    return;
  }

  const id = editingId !== null ? editingId : nextRecipeId();
  const recipeObj = {
    id,
    name,
    category,
    protein: canonicalize($("f-protein").value, uniqueValues("protein")),
    sauce: canonicalize($("f-sauce").value, uniqueValues("sauce")),
    carb: canonicalize($("f-carb").value, uniqueValues("carb")),
    emoji: $("f-emoji").value.trim() || "🍽️",
    servings,
    prep: $("f-prep").value.trim(),
    mealPrep: $("f-mealprep").checked,
    freezerFriendly: $("f-freezer").checked,
    ingredients,
    methods,
    notes: linesToArray($("f-notes").value),
    pairsWith: $("f-pairs").value.split(",").map(s => s.trim()).filter(Boolean)
  };
  if (!isBaseRecipeId(id)) recipeObj.isUserAdded = true;
  if (pendingImageDataUrl) recipeObj.image = pendingImageDataUrl;

  const existingIdx = userRecipes.findIndex(r => r.id === id);
  if (existingIdx >= 0) userRecipes[existingIdx] = recipeObj;
  else userRecipes.push(recipeObj);

  saveUserRecipes();
  refreshAllRecipes();
  initFilters();
  renderGrid();
  selectRecipe(id, true);

  $("addRecipeForm").classList.add("hidden");
  $("addRecipeSuccess").classList.remove("hidden");
  $("addRecipeSuccessMsg").textContent = editingId !== null
    ? "✅ Changes saved to this device. To make it permanent, download the updated file and push it to GitHub."
    : "✅ Saved to this device. To make it permanent, download the updated file and push it to GitHub.";
}

function resetOverrideToOriginal() {
  if (editingId === null) return;
  if (!confirm("Discard your edits and revert to the original recipe?")) return;
  userRecipes = userRecipes.filter(r => r.id !== editingId);
  saveUserRecipes();
  refreshAllRecipes();
  initFilters();
  renderGrid();
  selectRecipe(editingId, true);
  closeAddRecipeModal();
}

function deleteUserRecipe(id) {
  const recipe = allRecipes.find(r => r.id === id);
  if (!recipe || !recipe.isUserAdded) return;
  if (!confirm(`Delete "${recipe.name}"? This only removes it from this device.`)) return;

  userRecipes = userRecipes.filter(r => r.id !== id);
  saveUserRecipes();
  refreshAllRecipes();
  initFilters();

  if (selectedRecipe && selectedRecipe.id === id) {
    selectedRecipe = allRecipes[0];
    if (selectedRecipe) {
      selectedMethod = preferredMethodFor(selectedRecipe);
      currentServings = selectedRecipe.servings;
    }
  }
  renderGrid();
  renderDetail();
}

function serializeRecipesJS() {
  const clean = allRecipes.map(({ isUserAdded, ...rest }) => rest);
  return `const recipes = ${JSON.stringify(clean, null, 2)};\n`;
}

function downloadRecipesFile() {
  const blob = new Blob([serializeRecipesJS()], { type: "text/javascript" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "recipes.js";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* ============================================================
   My Data: export / import everything saved in this browser
   ============================================================ */

function exportUserData() {
  const payload = {
    exportedAt: new Date().toISOString(),
    userRecipes,
    favorites: [...favorites],
    shoppingList: shoppingItems
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "cooking-app-backup.json";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function importUserData(file) {
  const reader = new FileReader();
  reader.onload = () => {
    let data;
    try {
      data = JSON.parse(reader.result);
    } catch (e) {
      showDataModalMessage("That file isn't valid JSON — nothing was imported.");
      return;
    }

    if (Array.isArray(data.userRecipes)) {
      data.userRecipes.forEach(r => {
        const idx = userRecipes.findIndex(u => u.id === r.id);
        if (idx >= 0) userRecipes[idx] = r;
        else userRecipes.push(r);
      });
      saveUserRecipes();
    }

    if (Array.isArray(data.favorites)) {
      data.favorites.forEach(id => favorites.add(id));
      saveFavorites();
    }

    if (Array.isArray(data.shoppingList)) {
      data.shoppingList.forEach(item => {
        if (!shoppingItems.some(s => s.text.toLowerCase() === item.text.toLowerCase())) {
          shoppingItems.push(item);
        }
      });
      saveShoppingList();
    }

    refreshAllRecipes();
    initFilters();
    renderGrid();
    renderDetail();
    showDataModalMessage("✅ Import complete.");
  };
  reader.readAsText(file);
}

function showDataModalMessage(msg) {
  const el = $("dataModalMessage");
  el.textContent = msg;
  el.classList.remove("hidden");
}

/* ============================================================
   Sidebar navigation (categories) + mobile drawer
   ============================================================ */

document.querySelectorAll(".nav[data-category]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav[data-category]").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedCategory = btn.dataset.category;
    $("categoryFilter").value = "All";
    renderGrid();
    closeSidebar();
  });
});

function openSidebar() {
  $("sidebar").classList.add("open");
  $("sidebarOverlay").classList.add("open");
  $("sidebarOverlay").classList.remove("hidden");
}

function closeSidebar() {
  $("sidebar").classList.remove("open");
  $("sidebarOverlay").classList.remove("open");
  $("sidebarOverlay").classList.add("hidden");
}

$("hamburgerBtn").addEventListener("click", openSidebar);
$("closeSidebar").addEventListener("click", closeSidebar);
$("sidebarOverlay").addEventListener("click", closeSidebar);

/* ============================================================
   Filters, search, shopping modal
   ============================================================ */

$("searchBtn").addEventListener("click", renderGrid);
$("search").addEventListener("input", renderGrid);
["categoryFilter", "proteinFilter", "sauceFilter", "carbFilter", "methodFilter"].forEach(id => {
  $(id).addEventListener("change", () => {
    if (id === "methodFilter") selectedMethod = $(id).value === "All" ? null : $(id).value;
    renderGrid();
    renderDetail();
  });
});

$("clearBtn").addEventListener("click", () => {
  $("search").value = "";
  $("categoryFilter").value = "All";
  $("proteinFilter").value = "All";
  $("sauceFilter").value = "All";
  $("carbFilter").value = "All";
  $("methodFilter").value = "All";
  selectedMethod = null;
  selectedCategory = "All";
  document.querySelectorAll(".nav[data-category]").forEach(b => b.classList.remove("active"));
  document.querySelector(".nav[data-category='All']").classList.add("active");
  renderGrid();
  renderDetail();
});

$("show-shopping").addEventListener("click", () => {
  renderShopping();
  $("modal").classList.remove("hidden");
  closeSidebar();
});

$("closeModal").addEventListener("click", () => $("modal").classList.add("hidden"));
$("clearShopping").addEventListener("click", () => {
  if (!shoppingItems.length) return;
  if (!confirm("Clear the entire shopping list?")) return;
  shoppingItems = [];
  saveShoppingList();
  renderShopping();
});

$("favoritesBtn").addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;
  $("favoritesBtn").classList.toggle("active", favoritesOnly);
  $("favoritesBtn").textContent = favoritesOnly ? "♥ Favorites" : "♡ Favorites";
  renderGrid();
});

/* ============================================================
   Add / Edit Recipe modal wiring
   ============================================================ */

$("addRecipeBtn").addEventListener("click", openAddRecipeModal);
$("closeAddRecipeModal").addEventListener("click", closeAddRecipeModal);
$("cancelAddRecipe").addEventListener("click", closeAddRecipeModal);
$("addRecipeForm").addEventListener("submit", handleAddRecipeSubmit);
$("downloadRecipesBtn").addEventListener("click", downloadRecipesFile);
$("addAnotherBtn").addEventListener("click", resetAddRecipeForm);
$("resetOverrideBtn").addEventListener("click", resetOverrideToOriginal);

$("f-image-file").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;
  try {
    pendingImageDataUrl = await resizeImageToDataUrl(file);
    showImagePreview(pendingImageDataUrl);
  } catch (err) {
    console.error("Could not process image:", err);
    alert("Could not read that photo — try a different file.");
  }
});

$("removeImageBtn").addEventListener("click", () => {
  pendingImageDataUrl = null;
  $("f-image-file").value = "";
  $("imagePreviewWrap").classList.add("hidden");
});

/* ============================================================
   My Data modal wiring
   ============================================================ */

$("show-data").addEventListener("click", () => {
  $("dataModalMessage").classList.add("hidden");
  $("dataModal").classList.remove("hidden");
  closeSidebar();
});
$("closeDataModal").addEventListener("click", () => $("dataModal").classList.add("hidden"));
$("exportDataBtn").addEventListener("click", exportUserData);
$("importDataInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) importUserData(file);
});

/* ============================================================
   Init
   ============================================================ */

buildMethodFieldsets();
initFilters();
setupAutocomplete("f-category", categorySuggestions);
setupAutocomplete("f-protein", () => uniqueValues("protein").filter(v => v !== "All"));
setupAutocomplete("f-sauce", () => uniqueValues("sauce").filter(v => v !== "All"));
setupAutocomplete("f-carb", () => uniqueValues("carb").filter(v => v !== "All"));
selectedMethod = preferredMethodFor(selectedRecipe);
currentServings = selectedRecipe ? selectedRecipe.servings : 1;
renderGrid();
renderDetail();
