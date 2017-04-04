/**
 * @file
 * An example file for classes
 */

// Basic class
//ES5
/* var Food = function(name) {
  this.name = name;
};

Food.prototype.describe = function() {
  console.log(this.name + " is the best food.");
}; */

//ES6 - this is the same as the above.
class Food {
  constructor(name) {
    this.name = name;
  }

  describe() {
    console.log(this.name + " is the best food.");
  }
}

// const pizza = new Food("Pizza");
// pizza.describe();

// Extends/Super
class Pizza extends Food {
  constructor(name) {
    super();
    this.name = "Pizza";
  }

  toppings(ingrediants) {
    super.describe();
    console.log("I like " + ingrediants + " on mine.");
  }
}

const myStyle = new Pizza();
myStyle.toppings("mushrooms and onions");


