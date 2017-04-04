/**
 * @file
 * An example file for template literals
 */

//ES5
// var beverage = "BEER";
// console.log("Time to go drink " + beverage + "!");

//ES6
const beverage = `BEER`;
console.log(`Time to go drink ${beverage}!`);

// Ternary in template literal
const isPizza = true;
const cheer = () => `
  YEAAAAAA!
`;

const template = () => `
  <div>
    ${isPizza ? `${cheer()}` : `I'm so sad. :(`}
  </div>
`;

const nextLink = document.querySelector(`.next`);
nextLink.insertAdjacentHTML(`afterend`, template());
