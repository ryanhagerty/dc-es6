/**
 * @file
 * An example file for promises
 */

// Basic promise
const amazonAWS = true;

const yourPromise = new Promise((resolve, reject) => {
  if (amazonAWS) {
    setTimeout(() => {
      resolve("Your data!");
    }, 1000);
  } else {
    reject("It's down.");
  }
});

yourPromise.then((message) => {
  console.log("What did I get? " + message);
  // What did I get? Your data!
}, function (err) {
  console.log("Oh no! " + err);
});

// Promise chain
const newPromise = new Promise((resolve, reject) => {
  const result = 2;
  resolve(result);
});

const errorFunction = () => {
  console.log('here be an errrrrror!');
};

newPromise.then((result) => {
  const newResult = result * 2; // 4
  return newResult;
  //return Promise.reject();
}).catch(errorFunction).then((result) => {
  const newResult = result * 2; // 8
  console.log(newResult);
});

// Promise all
const apis = ['site1', 'site2', 'site3'];

Promise.all(apis).then(function (results) {
  results.forEach((api) => {
    console.log(api);
    // site1
    // site2
    // site3
  });
});
