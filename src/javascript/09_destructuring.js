/**
 * @file
 * An example file for destructuring
 */

// ES5
/* var name1 = `Ryan`;
var name2 = `Rye`;
var name3 = `Ryerye`; */

// ES6
// Arrays
/* const [ name1, name2, name3 ] = [ `Ryan`, `Rye`, `Ryerye` ];
console.log(name1); */

const names = [ `Ryan`, `Rye`, `Ryerye` ];
const [name1, name2, name3] = names;
console.log(name2);

// Objects
/* const superHero = {
  alias: `Spider-man`,
  name: `Peter Parker`
};

const { alias, name } = superHero;
console.log(alias); */

const superVillain = {
  alias: `Sandman`,
  name: `William Baker`,
  weaknesses: {
    weakness: `Water`,
    weakness2: `Planning heists`
  }
}

const { alias, weaknesses: { weakness } } = superVillain;
console.log(alias, weakness);
