/**
 * @file
 * An example file for const/let
 */

// let example.
let number = 41;
// You can update
number = 42;
// But you can't redefine
// let number = 42;

// Great for loops - block scoped
for(let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

// const example.
const name = "Ryan";
// You can't update
// name = "Rye";
// and you can't redefine
// const name = "Ryerye";

// But const is not immutable!
const person = {
  name: "Ryan"
};

person.name = "Ryerye";

console.log(person.name);
