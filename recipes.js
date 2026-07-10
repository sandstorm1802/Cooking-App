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
    mealPrep: true,
    freezerFriendly: true,
    ingredients: [
      "4 lbs boneless skinless chicken thighs",
      "2 tbsp BBQ rub",
      "1 tsp garlic powder",
      "1 tsp onion powder",
      "1 cup favorite BBQ sauce",
      "2 bags broccoli, green beans, or cauliflower rice"
    ],
    methods: {
      "Oven": {
        cook: "30–35 min",
        instructions: [
          "Preheat oven to 400°F and line a sheet pan with foil or parchment.",
          "Trim large pieces of fat from the chicken thighs and pat dry.",
          "Mix BBQ rub, garlic powder, and onion powder, then season both sides of the chicken.",
          "Arrange chicken in a single layer on the sheet pan.",
          "Bake 25–30 minutes, until the thickest thigh reaches 175°F.",
          "Brush or toss with BBQ sauce during the final 5 minutes so it sets without burning.",
          "Rest 5 minutes, then portion with vegetables for meal prep."
        ]
      },
      "Recteq": {
        cook: "45–60 min",
        instructions: [
          "Preheat Recteq to 375°F.",
          "Trim chicken thighs, pat dry, and season both sides with BBQ rub, garlic powder, and onion powder.",
          "Place thighs directly on the grate or on a grill-safe tray.",
          "Cook 35–45 minutes, flipping once if needed, until chicken reaches about 165°F.",
          "Brush with BBQ sauce and continue cooking until the sauce is tacky and the chicken reaches 175°F.",
          "Rest 5 minutes before slicing or portioning for meal prep."
        ]
      },
      "Air Fryer": {
        cook: "22–26 min",
        instructions: [
          "Preheat air fryer to 380°F.",
          "Season trimmed chicken thighs with BBQ rub, garlic powder, and onion powder.",
          "Place chicken in a single layer in the basket. Cook in batches if needed.",
          "Air fry 12 minutes, flip, then cook another 8–10 minutes.",
          "Brush with BBQ sauce and cook 2–4 minutes more, until chicken reaches 175°F.",
          "Rest 5 minutes before serving or meal prepping."
        ]
      }
    },
    notes: ["Chicken thighs stay juicy when reheated.", "Freezes up to 3 months.", "Use cauliflower rice or vegetables for low carb."],
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
    methods: {
      "Oven": {
        cook: "30–35 min",
        instructions: [
          "Preheat oven to 400°F and line a sheet pan.",
          "Trim chicken thighs and pat dry.",
          "Bake chicken 25–30 minutes, until it reaches 175°F.",
          "While chicken cooks, combine honey, soy sauce, garlic, rice vinegar, and sesame oil in a saucepan.",
          "Simmer sauce 5–10 minutes until slightly thickened.",
          "Cook rice and steam broccoli.",
          "Rest chicken 5 minutes, slice if desired, and toss with sauce.",
          "Portion rice, broccoli, and chicken into meal prep containers."
        ]
      },
      "Stovetop": {
        cook: "25–30 min",
        instructions: [
          "Cut chicken thighs into large bite-size pieces and pat dry.",
          "Heat a large skillet over medium-high heat with a little oil.",
          "Cook chicken in batches until browned and cooked to 175°F.",
          "Remove chicken and lower heat to medium.",
          "Add honey, soy sauce, garlic, rice vinegar, and sesame oil to the pan.",
          "Simmer 3–5 minutes, scraping up browned bits, until sauce thickens slightly.",
          "Return chicken to the skillet and toss until coated.",
          "Serve over rice with broccoli."
        ]
      },
      "Instant Pot": {
        cook: "20–25 min",
        instructions: [
          "Add honey, soy sauce, garlic, rice vinegar, sesame oil, and 1/4 cup water to the Instant Pot.",
          "Add chicken thighs and turn to coat.",
          "Pressure cook on High for 8 minutes, then natural release for 5 minutes before quick releasing.",
          "Remove chicken and set Instant Pot to Sauté.",
          "Simmer sauce until slightly reduced, or thicken with a small cornstarch slurry if desired.",
          "Slice or shred chicken, return it to the sauce, and serve with rice and broccoli."
        ]
      }
    },
    notes: ["Keep extra sauce separate if freezing.", "Cauliflower rice works for lower carb.", "Chicken thighs reheat better than breasts."],
    pairsWith: ["Steamed Broccoli", "Rice", "Cauliflower Rice", "Asian Slaw"]
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
    methods: {
      "Stovetop": {
        cook: "2–3 hr",
        instructions: [
          "Bring a large pot of water to a boil and cut the core out of the cabbage.",
          "Place cabbage in boiling water for 3–5 minutes, peeling off leaves as they soften.",
          "Mix ground beef, uncooked rice, complete seasoning, and black pepper.",
          "Form the meat mixture into meatballs or logs sized for the cabbage leaves.",
          "Place filling on each cabbage leaf, fold sides inward, and roll tightly.",
          "Place rolls seam-side down in a large heavy pot.",
          "Cover with tomato juice and diced tomatoes.",
          "Bring to a gentle simmer, cover, and cook 2–3 hours until cabbage is tender and rice is cooked.",
          "Check liquid occasionally and add tomato juice or water if needed."
        ]
      },
      "Oven": {
        cook: "2.5–3 hr",
        instructions: [
          "Prepare cabbage leaves and filling the same way as the stovetop method.",
          "Preheat oven to 325°F.",
          "Spread a little tomato juice in the bottom of a deep roasting pan or Dutch oven.",
          "Arrange cabbage rolls seam-side down in layers.",
          "Pour tomato juice and diced tomatoes over the rolls until mostly covered.",
          "Cover tightly with foil or a lid.",
          "Bake 2.5–3 hours, until cabbage is tender and the rice inside the rolls is cooked.",
          "Rest 15 minutes before serving so the rolls hold together."
        ]
      },
      "Slow Cooker": {
        cook: "6–8 hr",
        instructions: [
          "Prepare cabbage leaves and filling as usual.",
          "Add a thin layer of tomato juice to the bottom of the slow cooker.",
          "Stack cabbage rolls seam-side down in the slow cooker.",
          "Cover with tomato juice and diced tomatoes.",
          "Cook on Low for 6–8 hours, until cabbage is tender and rice is cooked.",
          "Let rest 10–15 minutes before lifting out carefully."
        ]
      }
    },
    notes: ["Family recipe.", "Tastes better the next day.", "Freezes well in tomato sauce."],
    pairsWith: ["Mashed Potatoes", "Garlic Bread", "Extra Tomato Sauce"]
  },
  {
    id: 4,
    name: "Prime Rib",
    category: "Main Dishes",
    protein: "Beef",
    sauce: "Au Jus",
    carb: "Low Carb",
    emoji: "🥩",
    servings: 8,
    prep: "24 hr dry brine",
    mealPrep: false,
    freezerFriendly: false,
    ingredients: [
      "1 prime rib roast",
      "Kosher salt",
      "Black pepper",
      "Garlic powder",
      "Optional compound butter",
      "Au jus and mild horseradish sauce for serving"
    ],
    methods: {
      "Recteq": {
        cook: "3–5 hr plus rest",
        instructions: [
          "Dry brine the roast overnight with kosher salt, uncovered in the refrigerator.",
          "Remove roast 1–2 hours before cooking and season with black pepper and garlic powder.",
          "Preheat Recteq to 225–250°F.",
          "Cook until the center reaches 118–120°F for medium-rare carryover.",
          "Remove roast and rest 45 minutes, loosely tented.",
          "Increase Recteq temperature as high as practical for the final sear.",
          "Return roast briefly to brown the outside, or sear in a hot oven if easier.",
          "Slice and serve with au jus and mild horseradish sauce."
        ]
      },
      "Oven": {
        cook: "2.5–4 hr plus rest",
        instructions: [
          "Dry brine overnight with kosher salt, uncovered in the refrigerator.",
          "Remove roast 1–2 hours before cooking and season with black pepper and garlic powder.",
          "Preheat oven to 250°F.",
          "Roast on a rack until the center reaches 118–120°F for medium-rare carryover.",
          "Rest 45 minutes, loosely tented with foil.",
          "Increase oven to 500°F.",
          "Return roast for 6–10 minutes to brown the outside.",
          "Slice and serve immediately with au jus and horseradish sauce."
        ]
      }
    },
    notes: ["Pull temperature matters more than exact time.", "Resting before the final sear keeps the roast juicy.", "Use leftovers for French dip sandwiches."],
    pairsWith: ["Mild Horseradish Sauce", "Prime Rib Au Jus", "Sauteed Mushrooms", "Mashed Potatoes"]
  },
  {
    id: 5,
    name: "Pulled Pork",
    category: "Main Dishes",
    protein: "Pork",
    sauce: "BBQ",
    carb: "Low Carb",
    emoji: "🐖",
    servings: 10,
    prep: "20 min",
    mealPrep: true,
    freezerFriendly: true,
    ingredients: [
      "1 pork shoulder or pork butt",
      "Yellow mustard or binder, optional",
      "BBQ rub",
      "1/2 cup apple juice or broth, optional",
      "BBQ sauce for serving"
    ],
    methods: {
      "Recteq": {
        cook: "8–12 hr",
        instructions: [
          "Trim any hard fat from the pork shoulder.",
          "Coat lightly with mustard if using, then season generously with BBQ rub.",
          "Preheat Recteq to 225–250°F.",
          "Cook until bark is set and internal temperature is around 160–170°F.",
          "Wrap in foil or butcher paper with a splash of apple juice or broth if desired.",
          "Continue cooking until probe tender, usually around 200–205°F.",
          "Rest at least 1 hour before shredding.",
          "Shred, remove excess fat, and sauce lightly if desired."
        ]
      },
      "Slow Cooker": {
        cook: "8–10 hr",
        instructions: [
          "Season pork shoulder generously with BBQ rub.",
          "Place in slow cooker with 1/2 cup broth or apple juice.",
          "Cook on Low for 8–10 hours, until the pork shreds easily.",
          "Remove pork and shred, discarding large pieces of fat.",
          "Moisten with a little cooking liquid and BBQ sauce.",
          "For better texture, spread shredded pork on a sheet pan and broil briefly to crisp edges."
        ]
      },
      "Instant Pot": {
        cook: "90–110 min",
        instructions: [
          "Cut pork shoulder into large chunks and season with BBQ rub.",
          "Sear chunks on Sauté mode if you want extra flavor.",
          "Add 1 cup broth or apple juice to the pot.",
          "Pressure cook on High for 60 minutes, then natural release for 20 minutes.",
          "Check tenderness; pressure cook 10–15 minutes more if it does not shred easily.",
          "Shred pork and mix with BBQ sauce.",
          "Optional: broil on a sheet pan for crispy edges."
        ]
      }
    },
    notes: ["Freezes very well.", "Use leftovers for bowls, sandwiches, nachos, or omelets.", "Recteq gives the best bark."],
    pairsWith: ["Coleslaw", "Pickles", "BBQ Sauce", "Cauliflower Mac"]
  },
  {
    id: 6,
    name: "Pork Belly Burnt Ends",
    category: "Main Dishes",
    protein: "Pork",
    sauce: "BBQ",
    carb: "Low Carb",
    emoji: "🔥",
    servings: 8,
    prep: "20 min",
    mealPrep: false,
    freezerFriendly: true,
    ingredients: [
      "Pork belly, cut into 1.5-inch cubes",
      "BBQ rub",
      "Butter",
      "Brown sugar",
      "BBQ sauce"
    ],
    methods: {
      "Recteq": {
        cook: "3.5–4.5 hr",
        instructions: [
          "Preheat Recteq to 250°F.",
          "Cube pork belly into 1.5-inch pieces.",
          "Season generously with BBQ rub on all sides.",
          "Place cubes on a rack or directly on the grate with space between pieces.",
          "Cook until the bark develops, usually 2–2.5 hours.",
          "Transfer to a foil pan with butter, brown sugar, and BBQ sauce.",
          "Cover and cook until tender, about 60–90 minutes.",
          "Drain excess grease carefully.",
          "Sauce again and cook uncovered 15–20 minutes until sticky."
        ]
      },
      "Oven": {
        cook: "3–4 hr",
        instructions: [
          "Preheat oven to 275°F.",
          "Cube pork belly and season heavily with BBQ rub.",
          "Place on a wire rack over a sheet pan.",
          "Bake 2–2.5 hours until rendered and browned.",
          "Move pork belly to a foil pan with butter, brown sugar, and BBQ sauce.",
          "Cover and bake 60 minutes, until tender.",
          "Drain excess grease, sauce again, and bake uncovered 15–20 minutes."
        ]
      },
      "Air Fryer": {
        cook: "35–45 min",
        instructions: [
          "Cut pork belly into smaller 1-inch cubes so they cook evenly.",
          "Season with BBQ rub.",
          "Air fry at 350°F for 25–30 minutes, shaking the basket every 8–10 minutes.",
          "Move cubes to a small oven-safe pan or foil tray with butter, brown sugar, and BBQ sauce.",
          "Air fry 8–12 minutes more at 330°F until sticky and tender.",
          "Watch closely near the end because sugar can burn quickly."
        ]
      }
    },
    notes: ["Rich recipe; small portions go a long way.", "Drain grease before final saucing.", "Great party food."],
    pairsWith: ["Pickles", "Coleslaw", "Mac and Cheese", "Cornbread"]
  },
  {
    id: 7,
    name: "Chuck Roast Shepherd's Pie",
    category: "Main Dishes",
    protein: "Beef",
    sauce: "Gravy",
    carb: "Potatoes",
    emoji: "🥧",
    servings: 8,
    prep: "25 min",
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
    methods: {
      "Oven": {
        cook: "4 hr",
        instructions: [
          "Preheat oven to 325°F.",
          "Season chuck roast with salt and pepper.",
          "Brown roast on all sides in a Dutch oven.",
          "Remove roast and sauté onion, carrots, and celery.",
          "Add tomato paste and cook for 1 minute.",
          "Return roast to pot and add beef stock.",
          "Cover and braise 3–4 hours until fork tender.",
          "Shred meat and combine with vegetables and braising liquid.",
          "Transfer filling to a baking dish, top with mashed potatoes, and bake at 400°F for 20–25 minutes."
        ]
      },
      "Slow Cooker": {
        cook: "8–9 hr plus bake",
        instructions: [
          "Season chuck roast and brown it in a skillet if time allows.",
          "Add onion, carrots, celery, tomato paste, beef stock, and roast to the slow cooker.",
          "Cook on Low for 8–9 hours, until fork tender.",
          "Shred beef and mix with vegetables and enough cooking liquid to make a saucy filling.",
          "Transfer to a baking dish and top with mashed potatoes.",
          "Bake at 400°F for 20–25 minutes until browned."
        ]
      },
      "Instant Pot": {
        cook: "90 min plus bake",
        instructions: [
          "Season chuck roast and cut into large chunks if needed.",
          "Sear on Sauté mode until browned on multiple sides.",
          "Add onion, carrots, celery, tomato paste, and beef stock.",
          "Pressure cook on High for 60 minutes, then natural release for 15 minutes.",
          "Shred beef and combine with vegetables and reduced cooking liquid.",
          "Transfer to a baking dish, top with mashed potatoes, and bake at 400°F until golden."
        ]
      }
    },
    notes: ["Great freezer meal.", "Works well with leftover roast beef.", "Can be made in individual meal prep containers."],
    pairsWith: ["Green Beans", "Corn", "Side Salad"]
  },
  {
    id: 8,
    name: "Tuscan Chicken",
    category: "Main Dishes",
    protein: "Chicken",
    sauce: "Cream Sauce",
    carb: "Low Carb",
    emoji: "🍅",
    servings: 4,
    prep: "15 min",
    mealPrep: true,
    freezerFriendly: false,
    ingredients: [
      "2 lbs chicken breasts or thighs",
      "Salt, pepper, garlic powder",
      "2 tbsp butter or oil",
      "4 cloves garlic, minced",
      "1 cup heavy cream",
      "1/2 cup Parmesan cheese",
      "2 cups spinach",
      "1/2 cup sun-dried tomatoes, optional"
    ],
    methods: {
      "Stovetop": {
        cook: "25–30 min",
        instructions: [
          "Season chicken with salt, pepper, and garlic powder.",
          "Heat butter or oil in a large skillet over medium-high heat.",
          "Sear chicken on both sides until browned and cooked through; remove to a plate.",
          "Lower heat to medium and add garlic for 30 seconds.",
          "Add heavy cream and Parmesan, stirring until smooth.",
          "Stir in spinach and sun-dried tomatoes.",
          "Return chicken to the sauce and simmer 3–5 minutes.",
          "Serve as-is for low carb or over pasta/rice for the kids."
        ]
      },
      "Instant Pot": {
        cook: "25–30 min",
        instructions: [
          "Season chicken and place in Instant Pot with 1/2 cup broth.",
          "Pressure cook on High for 8 minutes, then quick release.",
          "Remove chicken and set pot to Sauté.",
          "Stir in garlic, cream, Parmesan, spinach, and sun-dried tomatoes.",
          "Simmer until sauce thickens slightly.",
          "Return chicken to the sauce and coat well."
        ]
      },
      "Oven": {
        cook: "35–40 min",
        instructions: [
          "Preheat oven to 400°F.",
          "Season chicken and place in a baking dish.",
          "Bake 20–25 minutes, until nearly cooked through.",
          "Meanwhile, make the cream sauce on the stovetop with garlic, cream, Parmesan, spinach, and tomatoes.",
          "Pour sauce over chicken and bake 8–10 minutes more, until chicken is fully cooked.",
          "Rest 5 minutes before serving."
        ]
      }
    },
    notes: ["Good rotation recipe.", "Serve over pasta for a higher-carb version.", "Spinach wilts quickly; add near the end."],
    pairsWith: ["Pasta", "Cauliflower Rice", "Garlic Bread", "Side Salad"]
  },
  {
    id: 9,
    name: "Beef Stroganoff",
    category: "Main Dishes",
    protein: "Beef",
    sauce: "Cream Sauce",
    carb: "Noodles",
    emoji: "🍄",
    servings: 6,
    prep: "15 min",
    mealPrep: true,
    freezerFriendly: false,
    ingredients: [
      "2 lbs beef strips or ground beef",
      "16 oz mushrooms, sliced",
      "1 onion, diced",
      "2 cups beef broth",
      "1 tbsp Worcestershire sauce",
      "1 cup sour cream",
      "Egg noodles or cauliflower rice"
    ],
    methods: {
      "Stovetop": {
        cook: "30 min",
        instructions: [
          "Brown beef in a large skillet or Dutch oven, then remove if using strips.",
          "Cook mushrooms and onion until browned and softened.",
          "Add beef broth and Worcestershire sauce, scraping the bottom of the pan.",
          "Return beef to the pan and simmer until tender and sauce reduces slightly.",
          "Lower heat and stir in sour cream without boiling.",
          "Serve over egg noodles or cauliflower rice."
        ]
      },
      "Instant Pot": {
        cook: "35–45 min",
        instructions: [
          "Use Sauté mode to brown beef, mushrooms, and onion.",
          "Add beef broth and Worcestershire sauce.",
          "Pressure cook on High for 12 minutes for beef strips, or 5 minutes for ground beef.",
          "Quick release carefully.",
          "Set to Sauté and reduce sauce if needed.",
          "Turn off heat and stir in sour cream.",
          "Serve over noodles or cauliflower rice."
        ]
      },
      "Slow Cooker": {
        cook: "6–8 hr",
        instructions: [
          "Add beef, mushrooms, onion, beef broth, and Worcestershire sauce to the slow cooker.",
          "Cook on Low for 6–8 hours, until beef is tender.",
          "Stir in sour cream during the final 15 minutes.",
          "Do not boil after adding sour cream.",
          "Serve over noodles or cauliflower rice."
        ]
      }
    },
    notes: ["Extra mushrooms are encouraged.", "Add sour cream at the end to prevent curdling.", "Cauliflower rice keeps it lower carb."],
    pairsWith: ["Egg Noodles", "Cauliflower Rice", "Green Beans"]
  },
  {
    id: 10,
    name: "Salisbury Steak",
    category: "Main Dishes",
    protein: "Beef",
    sauce: "Gravy",
    carb: "Potatoes",
    emoji: "🍽️",
    servings: 4,
    prep: "15 min",
    mealPrep: true,
    freezerFriendly: true,
    ingredients: [
      "2 lbs ground beef",
      "1 egg",
      "1/2 cup breadcrumbs, optional",
      "Garlic powder, onion powder, salt, pepper",
      "1 onion, sliced",
      "8 oz mushrooms, optional",
      "2 cups beef gravy or beef broth gravy"
    ],
    methods: {
      "Stovetop": {
        cook: "30 min",
        instructions: [
          "Mix ground beef with egg, breadcrumbs if using, and seasonings.",
          "Form into oval patties.",
          "Brown patties in a large skillet over medium-high heat; remove to a plate.",
          "Cook onions and mushrooms until softened.",
          "Add gravy or beef broth gravy and scrape the skillet.",
          "Return patties to the pan and simmer 10–15 minutes until cooked through.",
          "Serve with mashed potatoes or green beans."
        ]
      },
      "Oven": {
        cook: "35–40 min",
        instructions: [
          "Preheat oven to 375°F.",
          "Form seasoned beef mixture into patties.",
          "Brown patties quickly in a skillet for better flavor.",
          "Place patties in a baking dish with onions, mushrooms, and gravy.",
          "Cover and bake 25–30 minutes, until patties are cooked through.",
          "Rest 5 minutes before serving."
        ]
      }
    },
    notes: ["Mushrooms are optional but fit the recipe well.", "Freezes well with gravy.", "Good comfort food meal prep."],
    pairsWith: ["Mashed Potatoes", "Green Beans", "Sauteed Mushrooms"]
  },
  {
    id: 11,
    name: "Chicken Parmesan",
    category: "Main Dishes",
    protein: "Chicken",
    sauce: "Marinara",
    carb: "Pasta",
    emoji: "🍝",
    servings: 4,
    prep: "20 min",
    mealPrep: false,
    freezerFriendly: true,
    ingredients: [
      "4 chicken cutlets",
      "Salt, pepper, garlic powder",
      "1 cup flour",
      "2 eggs, beaten",
      "1.5 cups Italian breadcrumbs",
      "2 cups marinara sauce",
      "Mozzarella cheese",
      "Parmesan cheese"
    ],
    methods: {
      "Oven": {
        cook: "25–30 min",
        instructions: [
          "Preheat oven to 425°F.",
          "Season chicken cutlets with salt, pepper, and garlic powder.",
          "Dredge in flour, dip in egg, then coat in breadcrumbs.",
          "Place on a greased rack over a sheet pan and spray lightly with oil.",
          "Bake 15–18 minutes, flipping once, until golden and nearly cooked.",
          "Top with marinara, mozzarella, and Parmesan.",
          "Bake 5–8 minutes more until cheese melts and chicken reaches 165°F."
        ]
      },
      "Air Fryer": {
        cook: "18–22 min",
        instructions: [
          "Bread seasoned chicken cutlets with flour, egg, and breadcrumbs.",
          "Preheat air fryer to 380°F.",
          "Spray chicken lightly with oil and cook in a single layer for 8 minutes.",
          "Flip and cook 5–7 minutes more, until almost done.",
          "Top with marinara and cheese.",
          "Air fry 2–4 minutes more until cheese melts and chicken reaches 165°F."
        ]
      },
      "Stovetop": {
        cook: "30 min",
        instructions: [
          "Bread the chicken cutlets.",
          "Pan-fry in shallow oil over medium heat until golden on both sides and cooked through.",
          "Warm marinara in a separate pan.",
          "Top chicken with marinara and cheese.",
          "Cover briefly until cheese melts, or place under the broiler for better browning.",
          "Serve with pasta or a side salad."
        ]
      }
    },
    notes: ["Air fryer keeps it crisp with less oil.", "Serve over pasta for the family or with salad for lower carb.", "Freezes best before saucing."],
    pairsWith: ["Pasta", "Side Salad", "Garlic Bread"]
  },
  {
    id: 12,
    name: "Bulgogi Beef",
    category: "Main Dishes",
    protein: "Beef",
    sauce: "Bulgogi",
    carb: "Rice",
    emoji: "🥢",
    servings: 4,
    prep: "20 min plus marinade",
    mealPrep: true,
    freezerFriendly: true,
    ingredients: [
      "2 lbs thin-sliced beef",
      "1/2 cup soy sauce",
      "1/4 cup brown sugar",
      "4 cloves garlic, minced",
      "1 tbsp sesame oil",
      "1 tbsp rice vinegar",
      "Green onions, optional",
      "Rice or lettuce wraps"
    ],
    methods: {
      "Stovetop": {
        cook: "10–15 min",
        instructions: [
          "Mix soy sauce, brown sugar, garlic, sesame oil, and rice vinegar.",
          "Marinate thin-sliced beef at least 30 minutes, or overnight for stronger flavor.",
          "Heat a large skillet over high heat.",
          "Cook beef in batches so it sears instead of steaming.",
          "Reduce leftover marinade briefly in the pan if desired.",
          "Serve over rice or in lettuce wraps."
        ]
      },
      "Air Fryer": {
        cook: "8–12 min",
        instructions: [
          "Marinate thin-sliced beef at least 30 minutes.",
          "Preheat air fryer to 400°F.",
          "Drain excess marinade and place beef in a thin layer in the basket.",
          "Cook 6–8 minutes, shaking once, until edges brown.",
          "Cook in batches for best texture.",
          "Serve with rice, broccoli, or lettuce wraps."
        ]
      },
      "Instant Pot": {
        cook: "20 min",
        instructions: [
          "Add marinated beef and 1/4 cup water or broth to the Instant Pot.",
          "Pressure cook on High for 7 minutes, then quick release.",
          "Use Sauté mode to reduce the sauce for a few minutes.",
          "For better texture, spread beef on a sheet pan and broil 2–3 minutes.",
          "Serve with rice or lettuce wraps."
        ]
      }
    },
    notes: ["Cook hot and fast for best flavor.", "Freeze beef in marinade for future meals.", "Lettuce wraps make it lower carb."],
    pairsWith: ["Rice", "Broccoli", "Kimchi", "Lettuce Wraps"]
  },
  {
    id: 13,
    name: "Chicken Chipotle Bowl",
    category: "Main Dishes",
    protein: "Chicken",
    sauce: "Chipotle",
    carb: "Rice",
    emoji: "🌮",
    servings: 4,
    prep: "15 min",
    mealPrep: true,
    freezerFriendly: false,
    ingredients: [
      "2 lbs boneless skinless chicken thighs",
      "2 tbsp olive oil",
      "2 tsp chili powder",
      "2 tsp smoked paprika",
      "1 tsp cumin",
      "1 tsp garlic powder",
      "1 tsp onion powder",
      "1 tsp chipotle powder",
      "1 tsp salt",
      "1/2 tsp black pepper",
      "2 cups cooked rice",
      "1 can black beans, drained and rinsed",
      "1 can corn, drained",
      "2 cups shredded Monterey Jack cheese",
      "1 cup pico de gallo",
      "1 lime"
    ],
    methods: {
      "Stovetop": {
        cook: "20–25 min",
        instructions: [
          "Cook rice according to package directions.",
          "Combine chili powder, smoked paprika, cumin, garlic powder, onion powder, chipotle powder, salt, and pepper.",
          "Toss chicken with olive oil and seasoning.",
          "Cook chicken in a skillet over medium-high heat until browned and cooked to 175°F.",
          "Rest 5 minutes, then dice.",
          "Warm black beans and corn.",
          "Layer rice, beans, corn, chicken, Monterey Jack, pico de gallo, and lime juice."
        ]
      },
      "Oven": {
        cook: "30–35 min",
        instructions: [
          "Preheat oven to 400°F.",
          "Season chicken with olive oil and spice blend.",
          "Place chicken on a lined sheet pan.",
          "Bake 25–30 minutes, until chicken reaches 175°F.",
          "Rest and dice chicken.",
          "Build bowls with rice, beans, corn, cheese, pico de gallo, and lime."
        ]
      },
      "Air Fryer": {
        cook: "20–24 min",
        instructions: [
          "Season chicken thighs with olive oil and spice blend.",
          "Preheat air fryer to 380°F.",
          "Air fry chicken 12 minutes, flip, then cook 8–10 minutes more until 175°F.",
          "Rest and dice chicken.",
          "Assemble bowls with rice, beans, corn, Monterey Jack, pico, and lime."
        ]
      }
    },
    notes: ["Monterey Jack is closest to Chipotle-style cheese.", "Store pico separately for best texture.", "Keeps about 4 days refrigerated."],
    pairsWith: ["Fresh Pico de Gallo", "Chipotle Lime Crema", "Black Beans", "Corn"]
  },
  {
    id: 14,
    name: "Egg Salad",
    category: "Main Dishes",
    protein: "Eggs",
    sauce: "Mayo",
    carb: "Low Carb",
    emoji: "🥚",
    servings: 4,
    prep: "10 min",
    mealPrep: true,
    freezerFriendly: false,
    ingredients: [
      "8 large eggs",
      "1/3 cup mayonnaise",
      "1–2 tsp mustard",
      "Salt",
      "Black pepper",
      "Optional: paprika, celery, pickles, or green onion"
    ],
    methods: {
      "Stovetop": {
        cook: "15 min plus chill",
        instructions: [
          "Place eggs in a saucepan and cover with cold water.",
          "Bring to a boil, then cover, turn off heat, and rest 10–12 minutes.",
          "Transfer eggs to an ice bath until cool.",
          "Peel and chop eggs.",
          "Mix with mayonnaise, mustard, salt, and pepper.",
          "Chill before serving."
        ]
      },
      "Instant Pot": {
        cook: "15 min plus chill",
        instructions: [
          "Add 1 cup water to Instant Pot and place eggs on the rack.",
          "Pressure cook on High for 5 minutes.",
          "Natural release 5 minutes, then quick release.",
          "Move eggs to an ice bath for 5 minutes.",
          "Peel, chop, and mix with mayonnaise, mustard, salt, and pepper.",
          "Chill before serving."
        ]
      },
      "No Cook": {
        cook: "10 min",
        instructions: [
          "Use already-cooked hard-boiled eggs.",
          "Peel and chop eggs.",
          "Mix with mayonnaise, mustard, salt, and pepper.",
          "Add optional celery, pickles, paprika, or green onion.",
          "Chill until ready to serve."
        ]
      }
    },
    notes: ["Good for breakfast or lunch.", "Serve on bread, wraps, lettuce cups, or crackers.", "Keeps 3–4 days refrigerated."],
    pairsWith: ["Toast", "Lettuce Cups", "Pickles", "Chips"]
  },
  {
    id: 15,
    name: "Tomato Soup",
    category: "Main Dishes",
    protein: "None",
    sauce: "Tomato",
    carb: "Low Carb",
    emoji: "🍅",
    servings: 6,
    prep: "10 min",
    mealPrep: true,
    freezerFriendly: true,
    ingredients: [
      "2 large cans tomatoes or crushed tomatoes",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 cups broth",
      "Salt and pepper",
      "Cream, optional",
      "Butter or olive oil"
    ],
    methods: {
      "Stovetop": {
        cook: "35–45 min",
        instructions: [
          "Sauté onion in butter or oil until softened.",
          "Add garlic and cook 30 seconds.",
          "Add tomatoes, broth, salt, and pepper.",
          "Simmer 25–30 minutes.",
          "Blend until smooth with an immersion blender or countertop blender.",
          "Stir in cream if desired and adjust seasoning."
        ]
      },
      "Instant Pot": {
        cook: "25 min",
        instructions: [
          "Use Sauté mode to cook onion in butter or oil until softened.",
          "Add garlic for 30 seconds.",
          "Add tomatoes, broth, salt, and pepper.",
          "Pressure cook on High for 10 minutes, then quick release.",
          "Blend until smooth.",
          "Stir in cream if desired."
        ]
      },
      "Slow Cooker": {
        cook: "4–6 hr",
        instructions: [
          "Add tomatoes, onion, garlic, broth, salt, and pepper to the slow cooker.",
          "Cook on Low for 4–6 hours.",
          "Blend until smooth.",
          "Stir in cream if desired and adjust seasoning."
        ]
      }
    },
    notes: ["Freezes well before adding cream.", "Great with grilled cheese.", "Use crushed tomatoes for the easiest version."],
    pairsWith: ["Grilled Cheese", "Garlic Bread", "Side Salad"]
  },
  {
    id: 16,
    name: "Creme Brulee",
    category: "Desserts",
    protein: "Eggs",
    sauce: "Custard",
    carb: "Sugar",
    emoji: "🍮",
    servings: 6,
    prep: "20 min plus chill",
    mealPrep: false,
    freezerFriendly: false,
    ingredients: [
      "2 cups heavy cream",
      "5 egg yolks",
      "1/2 cup sugar, plus more for topping",
      "1 tsp vanilla",
      "Pinch of salt"
    ],
    methods: {
      "Oven": {
        cook: "35–45 min plus chill",
        instructions: [
          "Preheat oven to 325°F.",
          "Heat cream until steaming but not boiling.",
          "Whisk egg yolks, sugar, vanilla, and salt in a bowl.",
          "Slowly whisk hot cream into the yolks to temper them.",
          "Pour custard into ramekins.",
          "Place ramekins in a baking dish and add hot water halfway up the sides.",
          "Bake 35–45 minutes, until edges are set and centers still jiggle slightly.",
          "Chill at least 4 hours.",
          "Top with sugar and torch until caramelized."
        ]
      },
      "Instant Pot": {
        cook: "20 min plus chill",
        instructions: [
          "Prepare custard by tempering hot cream into egg yolks, sugar, vanilla, and salt.",
          "Pour custard into ramekins and cover each with foil.",
          "Add 1 cup water to the Instant Pot and place ramekins on the trivet.",
          "Pressure cook on Low pressure for 7 minutes, then natural release 10 minutes.",
          "Remove carefully and chill at least 4 hours.",
          "Top with sugar and torch until caramelized."
        ]
      }
    },
    notes: ["Custard should jiggle slightly when done.", "Chill fully before torching sugar.", "Torch right before serving."],
    pairsWith: ["Coffee", "Fresh Berries", "Whipped Cream"]
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
    mealPrep: false,
    freezerFriendly: false,
    ingredients: ["1 cup mayonnaise", "2 tbsp minced garlic", "1 tbsp lemon juice", "Salt to taste", "Black pepper to taste"],
    methods: {
      "No Cook": {
        cook: "5 min plus chill",
        instructions: [
          "Add mayonnaise to a mixing bowl.",
          "Stir in minced garlic and lemon juice.",
          "Season with salt and black pepper.",
          "Mix until smooth.",
          "Cover and refrigerate at least 30 minutes before serving."
        ]
      }
    },
    notes: ["Jarlic works fine.", "Great burger and fry sauce.", "Keeps about 5 days refrigerated."],
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
    mealPrep: false,
    freezerFriendly: false,
    ingredients: ["1 cup Duke's mayonnaise", "2 tbsp prepared horseradish", "1 tbsp sour cream", "1 tsp lemon juice", "Pinch of salt"],
    methods: {
      "No Cook": {
        cook: "5 min plus chill",
        instructions: [
          "Add mayonnaise, horseradish, sour cream, lemon juice, and salt to a bowl.",
          "Mix thoroughly until smooth.",
          "Taste and add more horseradish if you want more bite.",
          "Cover and chill at least 1 hour before serving."
        ]
      }
    },
    notes: ["Mild version for prime rib.", "Add more horseradish for extra heat."],
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
    mealPrep: false,
    freezerFriendly: true,
    ingredients: ["2 cups beef stock", "1 cup pan drippings", "1 tbsp Worcestershire sauce", "1 garlic clove, smashed"],
    methods: {
      "Stovetop": {
        cook: "20 min",
        instructions: [
          "Add beef stock and pan drippings to a saucepan.",
          "Stir in Worcestershire sauce and add smashed garlic.",
          "Bring to a gentle simmer.",
          "Simmer 15–20 minutes to concentrate flavor.",
          "Strain and serve warm."
        ]
      }
    },
    notes: ["Perfect with prime rib.", "Can be frozen in small containers."],
    pairsWith: ["Prime Rib", "Roast Beef", "French Dip Sandwiches"]
  },
  {
    id: 1004,
    name: "Fresh Pico de Gallo",
    category: "Sauces & Dips",
    protein: "None",
    sauce: "Pico",
    carb: "Low Carb",
    emoji: "🍅",
    servings: 6,
    prep: "15 min",
    mealPrep: true,
    freezerFriendly: false,
    ingredients: ["1 pint cherry tomatoes", "1/2 cup white onion", "1 jalapeño", "1/4 cup cilantro", "1 lime", "1 tsp salt"],
    methods: {
      "No Cook": {
        cook: "15 min rest",
        instructions: [
          "Dice tomatoes and onion.",
          "Mince jalapeño and chop cilantro.",
          "Combine everything in a bowl with lime juice and salt.",
          "Mix thoroughly.",
          "Rest 15 minutes before serving so the flavors blend."
        ]
      }
    },
    notes: ["Cherry tomatoes work better than poor quality Roma tomatoes.", "Best eaten within 2 days.", "Drain excess liquid before storing."],
    pairsWith: ["Chicken Chipotle Bowl", "Tacos", "Burritos", "Nachos"]
  },
  {
    id: 1005,
    name: "Chipotle Lime Crema",
    category: "Sauces & Dips",
    protein: "None",
    sauce: "Crema",
    carb: "Low Carb",
    emoji: "🌶️",
    servings: 8,
    prep: "5 min",
    mealPrep: false,
    freezerFriendly: false,
    ingredients: ["1/2 cup sour cream", "1 tbsp chipotle adobo sauce", "1 tsp lime juice", "1/4 tsp salt"],
    methods: {
      "No Cook": {
        cook: "5 min",
        instructions: [
          "Combine sour cream, chipotle adobo sauce, lime juice, and salt in a bowl.",
          "Whisk until smooth.",
          "Taste and adjust chipotle or lime.",
          "Refrigerate until ready to serve."
        ]
      }
    },
    notes: ["Excellent on bowls, tacos, and grilled chicken.", "Greek yogurt can replace sour cream for extra protein.", "Keeps about 5 days refrigerated."],
    pairsWith: ["Chicken Chipotle Bowl", "Tacos", "Quesadillas", "Burgers"]
  },
  {
    id: 1006,
    name: "Blueberry Balsamic Glaze",
    category: "Sauces & Dips",
    protein: "None",
    sauce: "Balsamic Glaze",
    carb: "Low Carb",
    emoji: "🫐",
    servings: 4,
    prep: "2 min",
    mealPrep: true,
    freezerFriendly: false,
    ingredients: ["1/4 cup blueberry dark balsamic vinegar", "1–2 tbsp honey", "1 tbsp brown sugar, optional", "Pinch of salt"],
    methods: {
      "Stovetop": {
        cook: "5 min",
        instructions: [
          "Add balsamic vinegar, honey, brown sugar if using, and salt to a small saucepan.",
          "Bring to a gentle simmer over medium heat.",
          "Cook 3–5 minutes until slightly reduced and glossy.",
          "Remove from heat and cool slightly before using.",
          "Brush over cream cheese, pork, or chicken."
        ]
      }
    },
    notes: ["Do not reduce too long or it can get too thick.", "Works with Holy Garlic rub, crushed pecans, or hot honey."],
    pairsWith: ["Cream Cheese", "Pork", "Chicken", "Goat Cheese"]
  },
  {
    id: 1007,
    name: "Dark Cherry Balsamic Glaze",
    category: "Sauces & Dips",
    protein: "None",
    sauce: "Balsamic Glaze",
    carb: "Low Carb",
    emoji: "🍒",
    servings: 4,
    prep: "2 min",
    mealPrep: true,
    freezerFriendly: false,
    ingredients: ["1/4 cup dark cherry balsamic vinegar", "1 tbsp hot honey", "1–2 tsp black cherry chipotle rub", "1–2 tsp beer mustard"],
    methods: {
      "Stovetop": {
        cook: "6 min",
        instructions: [
          "Add dark cherry balsamic vinegar, hot honey, black cherry chipotle rub, and beer mustard to a small saucepan.",
          "Bring to a gentle simmer over medium heat.",
          "Simmer 5–6 minutes until slightly thickened.",
          "Remove from heat.",
          "Brush over chicken, pork, or cream cheese."
        ]
      }
    },
    notes: ["Works as a glaze or reduction.", "Can be whisked with olive oil and Dijon for a quick dressing."],
    pairsWith: ["Chicken Thighs", "Pork", "Cream Cheese", "Goat Cheese", "Arugula"]
  },
  {
    id: 1008,
    name: "Compound Butter for Prime Rib",
    category: "Sauces & Dips",
    protein: "Beef",
    sauce: "Butter",
    carb: "None",
    emoji: "🧈",
    servings: 8,
    prep: "10 min",
    mealPrep: true,
    freezerFriendly: true,
    ingredients: ["1 stick softened butter", "2 cloves garlic, minced", "1 tbsp parsley", "Black pepper", "Pinch of salt"],
    methods: {
      "No Cook": {
        cook: "10 min",
        instructions: [
          "Soften butter at room temperature.",
          "Mix in garlic, parsley, black pepper, and a pinch of salt.",
          "Use immediately on prime rib or roll into plastic wrap and chill.",
          "Slice into rounds for topping steaks, vegetables, or roast beef."
        ]
      }
    },
    notes: ["Great during the finishing stage of prime rib.", "Freeze in slices for later."],
    pairsWith: ["Prime Rib", "Steak", "Roasted Vegetables"]
  },
  {
    id: 2001,
    name: "Sauteed Mushrooms",
    category: "Sides",
    protein: "None",
    sauce: "Butter",
    carb: "Low Carb",
    emoji: "🍄",
    servings: 4,
    prep: "5 min",
    mealPrep: true,
    freezerFriendly: false,
    ingredients: ["16 oz mushrooms, sliced", "2 tbsp butter", "Salt", "Black pepper", "Optional garlic or Worcestershire sauce"],
    methods: {
      "Stovetop": {
        cook: "15–20 min",
        instructions: [
          "Heat a skillet over medium-high heat.",
          "Add butter and mushrooms.",
          "Cook without stirring too much so mushrooms brown instead of steam.",
          "Season with salt and pepper once they release moisture.",
          "Add garlic or Worcestershire near the end if using.",
          "Cook until browned and tender."
        ]
      },
      "Air Fryer": {
        cook: "10–12 min",
        instructions: [
          "Toss mushrooms with melted butter, salt, and pepper.",
          "Air fry at 375°F for 10–12 minutes, shaking halfway.",
          "Add garlic near the end if using so it does not burn.",
          "Serve hot."
        ]
      }
    },
    notes: ["Salt after mushrooms start cooking for better browning.", "Great with prime rib, burgers, and stroganoff."],
    pairsWith: ["Prime Rib", "Salisbury Steak", "Burgers", "Beef Stroganoff"]
  },
  {
  id: 3001,
  name: "Matt's Pork Butt Rub",
  category: "Rubs & Seasonings",
  protein: "Pork",
  sauce: "BBQ",
  carb: "None",
  emoji: "🧂",
  servings: 20,
  prep: "5 min",
  mealPrep: true,
  freezerFriendly: true,
  ingredients: [
    "1 cup brown sugar",
    "1/4 cup kosher salt",
    "1/4 cup black pepper",
    "1/4 cup paprika",
    "1 tbsp garlic powder",
    "1 tbsp onion powder",
    "2 tsp chili powder",
    "2 tsp cayenne pepper (optional)",
    "Optional: Replace 1 tbsp paprika with 1 tbsp smoked paprika"
  ],
  methods: {
    "No Cook": {
      cook: "5 min",
      instructions: [
        "Combine all ingredients in a mixing bowl.",
        "Mix thoroughly until evenly distributed.",
        "Transfer to an airtight container.",
        "Store in a cool dry place.",
        "Use generously on pork butt, pork shoulder, pork belly, or ribs."
      ]
    }
  },
  notes: [
    "House pork rub.",
    "Perfect amount for two Costco pork butts.",
    "Smoked paprika adds deeper color and smoke flavor.",
    "Increase black pepper slightly for more BBQ bite."
  ],
  pairsWith: [
    "Pulled Pork",
    "Pork Belly Burnt Ends",
    "Pork Shoulder",
    "Country Style Ribs"
  ]
},
];
