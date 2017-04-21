/**
 * @file
 * An example file for arrow functions
 */

// Old
/* var logName = function(name) {
  console.log(name);
};

logName("Ryan"); // Ryan */

// New
const logName = (name) => {
  console.log(name);
};

logName("Ryerye"); // Ryerye

// this
const buttonStuff = {
  init() {
    this.listenClick();
  },

  listenClick() {
    const button = document.getElementById('button');
    button.addEventListener(`click`, () => {
      this.logClick();
    });
  },

  logClick() {
    console.log(`click`);
  },
}

buttonStuff.init();

// implicit return example
/* const number = (x) => {
  x * x;
};

console.log(number(2)); // undefined */

const number = (x) => x * x;
console.log(number(2)); // 4

// self invoking function
/* (function(){
  var logMessage = function(message) {
    console.log(message);
  };

  logMessage('Hi Drupalcon!');
})(); */

(() => {
  const logMessage = (message) => {
    console.log(message);
  };
  logMessage('Hellooooo Drupalcon');
})();
