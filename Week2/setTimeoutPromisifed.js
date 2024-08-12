const MyPromise = require('./MyPromise/MyPromise');

const setTimeoutPromisifed = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success! Ater ");
  }, 1000);
});

setTimeoutPromisifed
  .then((value) => {
    console.log(value);
    return "Next success!";
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
