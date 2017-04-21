/**
 * @file
 * An example file for default/rest parameters
 */

// Default parameters example
function changeBodyColor(color = "dodgerblue") {
  document.body.style.backgroundColor = color;
}

// Default will be dodgerblue unless provided
changeBodyColor();
//changeBodyColor("#e7e7e7");

// Rest parameters example
function logNumbers(...numbers) {
  console.log(numbers.length);
}

logNumbers(1); // 1
logNumbers(1,2,3,4); // 4
