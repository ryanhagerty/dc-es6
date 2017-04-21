/**
 * @file
 * An example file for block scope
 */

const name = "Ryan";

{
  const name = "Ryerye";
  console.log(name); // Ryerye
}

console.log(name); // Ryan
