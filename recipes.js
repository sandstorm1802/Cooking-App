const recipes = [
  {
    id: 1,
    name: "BBQ Chicken Thigh Meal Prep",
    category: "Main Dishes",
    protein: "Chicken",
    sauce: "BBQ",
    carb: "Low Carb",
    emoji: "🍗",
    servings: 8,
    prep: "10 min",
    cook: "30 min",
    mealPrep: true,
    freezerFriendly: true,
    ingredients: [
      "4 lbs boneless skinless chicken thighs",
      "2 tbsp BBQ rub",
      "1 tsp garlic powder",
      "1 tsp onion powder",
      "1 cup favorite BBQ sauce",
      "2 bags broccoli or green beans"
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "Line a sheet pan with foil for easy cleanup.",
      "Trim any large pieces of fat from the chicken thighs.",
      "Pat chicken dry with paper towels so seasoning sticks better.",
      "Mix BBQ rub, garlic powder, and onion powder in a small bowl.",
      "Season chicken evenly on both sides.",
      "Arrange chicken in a single layer on the pan.",
      "Bake 25–30 minutes, until the thickest piece reaches 175°F.",
      "Rest chicken for 5 minutes.",
      "Warm BBQ sauce in a small saucepan or microwave-safe bowl.",
      "Toss chicken with sauce.",
      "Steam vegetables until tender.",
      "Portion chicken and vegetables into meal prep containers.",
      "Cool before sealing and refrigerating."
    ],
    notes: [
      "Chicken thighs stay juicy when reheated.",
      "Freezes up to 3 months.",
      "Good low-carb meal prep option."
    ],
    pairsWith: ["Green Beans", "Broccoli", "Cauliflower Rice", "Garlic Aioli"]
  },
  {
    id: 2,
    name: "Honey Garlic Chicken Thigh Meal Prep",
    category: "Main Dishes",
    protein: "Chicken",
    sauce: "Honey Garlic",
    carb: "Rice",
    emoji: "🍯",
    servings: 8,
    prep: "15 min",
    cook: "30 min",
    mealPrep: true,
    freezerFriendly: true,
    ingredients: [
      "4 lbs boneless skinless chicken thighs",
      "1/2 cup honey",
      "1/3 cup soy sauce",
      "6 cloves garlic, minced",
      "1 tbsp rice vinegar",
      "1 tsp sesame oil",
      "2 cups uncooked rice",
      "2 bags broccoli"
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "Line a sheet pan with foil.",
      "Trim excess fat from chicken thighs.",
      "Arrange chicken in a single layer.",
      "Bake 25–30 minutes until 175°F internal temperature.",
      "While chicken cooks, combine honey, soy sauce, garlic, vinegar, and sesame oil in a saucepan.",
      "Bring mixture to a gentle simmer.",
      "Cook 5–10 minutes until slightly thickened.",
      "Cook rice according to package directions.",
      "Steam broccoli until tender.",
      "Rest chicken 5 minutes.",
      "Slice chicken if desired.",
      "Toss chicken with honey garlic sauce.",
      "Portion rice, broccoli, and chicken into containers."
    ],
    notes: [
      "Excellent freezer meal.",
      "Can substitute cauliflower rice for lower carbs.",
      "Keep extra sauce separate if freezing."
    ],
    pairsWith: ["Steamed Broccoli", "Green Beans", "Cauliflower Rice", "Asian Slaw"]
  },
  {
    id: 3,
    name: "Family Cabbage Rolls",
    category: "Main Dishes",
    image: "images/cabbage-rolls.jpg",
    protein: "Beef",
    sauce: "Tomato",
    carb: "Rice",
    emoji: "🥬",
    servings: 12,
    prep: "35 min",
    cook: "2–3 hr",
    mealPrep: true,
    freezerFriendly: true,
    ingredients: [
      "3 lbs 80/20 ground beef",
      "1 cup uncooked rice",
      "1 large cabbage",
      "4 quarts tomato juice",
      "2 cans diced tomatoes",
      "Complete seasoning",
      "Fresh black pepper"
    ],
    instructions: [
      "Bring a large pot of water to a boil.",
      "Cut the core out of the cabbage.",
      "Place cabbage in boiling water for 3–5 minutes until leaves loosen.",
      "Remove softened leaves carefully and set aside.",
      "Mix ground beef, uncooked rice, complete seasoning, and black pepper.",
      "Form the meat mixture into meatballs.",
      "Place one meatball on each cabbage leaf.",
      "Fold the sides inward and roll tightly.",
      "Place rolls seam-side down in a large pot.",
      "Cover with tomato juice and diced tomatoes.",
      "Bring to a gentle simmer.",
      "Cover and cook 2–3 hours, until cabbage is tender and rice is cooked.",
      "Check liquid occasionally and add more tomato juice or water if needed."
    ],
    notes: [
      "Family recipe.",
      "Tastes even better the next day.",
      "Freezes well."
    ],
    pairsWith: ["Mashed Potatoes", "Garlic Bread", "Extra Tomato Sauce"]
  },
  {
    id: 4,
    name: "Chuck Roast Shepherd's Pie",
    category: "Main Dishes",
    protein: "Beef",
    sauce: "Gravy",
    carb: "Potatoes",
    emoji: "🥧",
    servings: 8,
    prep: "25 min",
    cook: "4 hr",
    mealPrep: true,
    freezerFriendly: true,
    ingredients: [
      "3 lb chuck roast",
      "1 onion, diced",
      "2 carrots, diced",
      "2 celery stalks, diced",
      "2 tbsp tomato paste",
      "1 cup beef stock",
      "Mashed potatoes for topping"
    ],
    instructions: [
      "Preheat oven to 325°F.",
      "Season chuck roast with salt and pepper.",
      "Brown roast on all sides in a Dutch oven.",
      "Remove roast and sauté onion, carrots, and celery.",
      "Add tomato paste and cook for 1 minute.",
      "Return roast to pot and add beef stock.",
      "Cover and braise 3–4 hours until fork tender.",
      "Remove roast and shred meat.",
      "Combine shredded meat with vegetables and braising liquid.",
      "Transfer filling to a baking dish.",
      "Spread mashed potatoes over the top.",
      "Bake at 400°F for 20–25 minutes until golden brown."
    ],
    notes: [
      "Great freezer meal.",
      "A good way to use leftover roast beef.",
      "Can be made in individual meal prep containers."
    ],
    pairsWith: ["Green Beans", "Corn", "Side Salad"]
  },
  {
    id: 1001,
    name: "Garlic Aioli",
    category: "Sauces & Dips",
    protein: "None",
    sauce: "Aioli",
    carb: "None",
    emoji: "🥣",
    servings: 8,
    prep: "5 min",
    cook: "0 min",
    mealPrep: false,
    freezerFriendly: false,
    ingredients: [
      "1 cup mayonnaise",
      "2 tbsp minced garlic",
      "1 tbsp lemon juice",
      "Salt to taste",
      "Black pepper to taste"
    ],
    instructions: [
      "Add mayonnaise to a mixing bowl.",
      "Stir in minced garlic.",
      "Add lemon juice.",
      "Season with salt and pepper.",
      "Mix until smooth.",
      "Cover and refrigerate at least 30 minutes before serving."
    ],
    notes: [
      "Jarlic works fine.",
      "Great burger and fry sauce.",
      "Keeps about 5 days refrigerated."
    ],
    pairsWith: ["Burgers", "Fries", "Chicken", "Roasted Vegetables"]
  },
  {
    id: 1002,
    name: "Mild Horseradish Sauce",
    category: "Sauces & Dips",
    protein: "Beef",
    sauce: "Horseradish",
    carb: "None",
    emoji: "🥩",
    servings: 8,
    prep: "5 min",
    cook: "0 min",
    mealPrep: false,
    freezerFriendly: false,
    ingredients: [
      "1 cup Duke's mayonnaise",
      "2 tbsp prepared horseradish",
      "1 tbsp sour cream",
      "1 tsp lemon juice",
      "Pinch of salt"
    ],
    instructions: [
      "Add mayonnaise to a bowl.",
      "Stir in prepared horseradish.",
      "Add sour cream and lemon juice.",
      "Season with a pinch of salt.",
      "Mix thoroughly.",
      "Cover and chill at least 1 hour before serving."
    ],
    notes: [
      "Mild version for prime rib.",
      "Add more horseradish for extra heat."
    ],
    pairsWith: ["Prime Rib", "Roast Beef", "Steak Sandwiches"]
  },
  {
    id: 1003,
    name: "Prime Rib Au Jus",
    category: "Sauces & Dips",
    protein: "Beef",
    sauce: "Au Jus",
    carb: "None",
    emoji: "🍲",
    servings: 8,
    prep: "5 min",
    cook: "20 min",
    mealPrep: false,
    freezerFriendly: true,
    ingredients: [
      "2 cups beef stock",
      "1 cup pan drippings",
      "1 tbsp Worcestershire sauce",
      "1 garlic clove, smashed"
    ],
    instructions: [
      "Add beef stock and pan drippings to a saucepan.",
      "Stir in Worcestershire sauce.",
      "Add smashed garlic clove.",
      "Bring to a gentle simmer.",
      "Simmer 15–20 minutes.",
      "Strain and serve warm."
    ],
    notes: [
      "Perfect with prime rib.",
      "Can be frozen in small containers."
    ],
    pairsWith: ["Prime Rib", "Roast Beef", "French Dip Sandwiches"]
  }
];