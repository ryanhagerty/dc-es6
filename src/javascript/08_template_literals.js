/**
 * @file
 * An example file for template literals
 */

//ES5
// var beverage = "BEER";
// console.log("Time to go drink " + beverage + "!");
// Time to go drink BEER!

//ES6
const beverage = `BEER`;
console.log(`Time to go drink ${beverage}!`);
// Time to go drink BEER!

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
// YEAAAAAA!

const nextLink = document.querySelector(`.next`);
nextLink.insertAdjacentHTML(`afterend`, template());
