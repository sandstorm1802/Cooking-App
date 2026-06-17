let selectedCategory = "All";
let selectedRecipe = recipes[1];
let shoppingItems = [];

const $ = (id) => document.getElementById(id);

function uniqueValues(key) {
  return ["All", ...new Set(recipes.map(r => r[key]).filter(Boolean))];
}

function fillSelect(id, values) {
  const el = $(id);
  el.innerHTML = values.map(v => `<option value="${v}">${v}</option>`).join("");
}

function initFilters() {
  fillSelect("categoryFilter", uniqueValues("category"));
  fillSelect("proteinFilter", uniqueValues("protein"));
  fillSelect("sauceFilter", uniqueValues("sauce"));
  fillSelect("carbFilter", uniqueValues("carb"));
}

function filteredRecipes() {
  const search = $("search").value.toLowerCase();
  const category = $("categoryFilter").value;
  const protein = $("proteinFilter").value;
  const sauce = $("sauceFilter").value;
  const carb = $("carbFilter").value;

  return recipes.filter(r => {
    const matchesNav = selectedCategory === "All" || r.category === selectedCategory;
    const matchesCategory = category === "All" || r.category === category;
    const matchesProtein = protein === "All" || r.protein === protein;
    const matchesSauce = sauce === "All" || r.sauce === sauce;
    const matchesCarb = carb === "All" || r.carb === carb;
    const matchesSearch =
      r.name.toLowerCase().includes(search) ||
      r.ingredients.join(" ").toLowerCase().includes(search) ||
      r.instructions.join(" ").toLowerCase().includes(search);

    return matchesNav && matchesCategory && matchesProtein && matchesSauce && matchesCarb && matchesSearch;
  });
}

function renderGrid() {
  const matches = filteredRecipes();
  $("resultTitle").textContent = `Recipes (${matches.length})`;

  $("recipeGrid").innerHTML = matches.map(r => `
    <article class="card ${selectedRecipe && selectedRecipe.id === r.id ? "selected" : ""}" onclick="selectRecipe(${r.id})">
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
        </div>
        <small>👥 ${r.servings} servings &nbsp; ${r.freezerFriendly ? "❄️ Freezer Friendly" : ""}</small>
      </div>
    </article>
  `).join("");

  if (matches.length && !matches.find(r => r.id === selectedRecipe?.id)) {
    selectRecipe(matches[0].id);
  }

  if (!matches.length) {
    $("recipeGrid").innerHTML = `<p>No recipes found.</p>`;
  }
}

function selectRecipe(id) {
  selectedRecipe = recipes.find(r => r.id === id);
  renderDetail();
  renderGrid();
}

function renderDetail() {
  const r = selectedRecipe;
  if (!r) {
    $("recipeDetail").innerHTML = "<p>Select a recipe.</p>";
    return;
  }

  $("recipeDetail").innerHTML = `
    <div class="detail-head">
      <h2>${r.name}</h2>
      <div class="badges">
        <span class="badge">👥 Servings: ${r.servings}</span>
        <span class="badge">⏱ Prep: ${r.prep}</span>
        <span class="badge">🔥 Cook: ${r.cook}</span>
        ${r.mealPrep ? `<span class="badge green">Meal Prep</span>` : ""}
        ${r.freezerFriendly ? `<span class="badge blue">❄️ Freezer Friendly</span>` : ""}
      </div>
    </div>

    <div class="tabs">
      <button class="tab active">📖 Recipe</button>
      <button class="tab">✎ Ingredients</button>
      <button class="tab">☷ Instructions</button>
      <button class="tab">📝 Notes</button>
    </div>

    <div class="detail-body">
      <div>
        <h3>Ingredients</h3>
        <ul>${r.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>

        <div class="notes-box">
          <h3>Notes</h3>
          <ul>${r.notes.map(n => `<li>${n}</li>`).join("")}</ul>
        </div>
      </div>

      <div>
        <h3>Instructions</h3>
        <ol class="steps">${r.instructions.map(s => `<li>${s}</li>`).join("")}</ol>
      </div>
    </div>

    <div class="pairs-box">
      <h3>👍 Pairs Well With</h3>
      <div class="tags">${r.pairsWith.map(p => `<span class="tag">${p}</span>`).join("")}</div>
    </div>

    <div class="actions">
      <button onclick="scaleRecipe()">— Scale</button>
      <button class="primary" onclick="addToShoppingList(${r.id})">🛒 Add to Shopping List</button>
      <button onclick="alert('Meal plan coming next.')">📦 Add to Meal Plan</button>
      <button onclick="window.print()">🖨 Print Recipe</button>
    </div>
  `;
}

function addToShoppingList(id) {
  const r = recipes.find(x => x.id === id);
  r.ingredients.forEach(item => {
    if (!shoppingItems.includes(item)) shoppingItems.push(item);
  });
  alert(`${r.name} added to shopping list.`);
}

function renderShopping() {
  $("shoppingList").innerHTML = shoppingItems.length
    ? `<ul>${shoppingItems.map(i => `<li><label><input type="checkbox"> ${i}</label></li>`).join("")}</ul>`
    : `<p>No items yet. Add a recipe first.</p>`;
}

function scaleRecipe() {
  const newServings = prompt("Scale to how many servings?", selectedRecipe.servings);
  if (!newServings) return;
  alert("Scaling math is coming next. For now, use this as a placeholder feature.");
}

document.querySelectorAll(".nav[data-category]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedCategory = btn.dataset.category;
    $("categoryFilter").value = "All";
    renderGrid();
  });
});

$("searchBtn").addEventListener("click", renderGrid);
$("search").addEventListener("input", renderGrid);

$("clearBtn").addEventListener("click", () => {
  $("search").value = "";
  $("categoryFilter").value = "All";
  $("proteinFilter").value = "All";
  $("sauceFilter").value = "All";
  $("carbFilter").value = "All";
  selectedCategory = "All";
  document.querySelectorAll(".nav").forEach(b => b.classList.remove("active"));
  document.querySelector(".nav[data-category='All']").classList.add("active");
  renderGrid();
});

$("show-shopping").addEventListener("click", () => {
  renderShopping();
  $("modal").classList.remove("hidden");
});

$("closeModal").addEventListener("click", () => $("modal").classList.add("hidden"));
$("clearShopping").addEventListener("click", () => {
  shoppingItems = [];
  renderShopping();
});

$("favoritesBtn").addEventListener("click", () => alert("Favorites coming next."));
$("addRecipeBtn").addEventListener("click", () => alert("Add Recipe form coming next."));

initFilters();
renderGrid();
renderDetail();
