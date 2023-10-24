class Dinner { 
  constructor(appetizer, entree, dessert)
  {
    this.appetizer = String(appetizer);
    this.entree = String(entree);
    this.dessert = String(dessert);
  }
}

class Chef {
  static cookDinner(appetizer, entree, dessert)
  {
    appetizer = appetizer === undefined ? this.generateAppetizer() : appetizer;
    dessert = dessert === undefined ? this.generateDessert() : dessert;
    if(entree === undefined)
    { 
      entree = this.generateEntre() + " /w " + this.generateSide();
    }
    
    return new Dinner(appetizer, entree, dessert);
  }
  
  static generateAppetizer() { return this.appetizers[Math.floor(Math.random()*this.appetizers.length)]; }
  static generateEntre() { return this.entrees[Math.floor(Math.random()*this.entrees.length)]; }
  static generateSide() { return this.sides[Math.floor(Math.random()*this.sides.length)]; }
  static generateDessert() { return this.desserts[Math.floor(Math.random()*this.desserts.length)]; }

  static appetizers = [
    "French Onion Soup",
    "Roasted Butternut Squash Salad",
    "Bacon Wrapped Dates",
    "Loaded Potato Skins",
    "Fresh Fruit Salad"
  ];
  
  static entrees = [
    "Chicken Marsala",
    "Cedar Plank Salmon",
    "BBQ Pulled Pork Sandwiches",
    "Chicken Pot Pie",
    "Creamy Lemon Chicken Piccata",
    "Braised Short Ribs"
  ];
  
  static sides = [
    "Artisan Bread",
    "Grilled Asparagus",
    "Potato Salad",
    "Rice Pilaf",
    "Mashed Potatoes"
  ];
  
  static desserts = [
    "Baked Apples",
    "Blackberry Cobbler",
    "Chocolate Brownies",
    "Key Lime Pie",
    "Mango Frozen Yogurt",
    "Banana Pudding"
  ];
}


// Food from https://tastesbetterfromscratch.com/3-course-meal-ideas/
const fullCourseMeals = [
  Chef.cookDinner(
    "French Onion Soup",
    "Chicken Marsala w/ Artisan Bread",
    "Baked Apples"),
  Chef.cookDinner(
    "Roasted Butternut Squash Salad",
    "Cedar Plank Salmon w/ Grilled Asparagus",
    "Blackberry Cobbler"),
  Chef.cookDinner(
    "Bacon Wrapped Dates",
    "BBQ Pulled Pork Sandwiches w/ Potato Salad",
    "Chocolate Brownies"),
  Chef.cookDinner()
]


fullCourseMeals.forEach(dinner => console.log(dinner));
