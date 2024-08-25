// callback
// setTimeout
// clearTimeout
// setInterval
// clearInterval

let iterator = 0;
let intervalId;
intervalId = setInterval(() => {
  console.log(iterator);
  iterator++;

  setTimeout(() => {
    clearTimeout(intervalId);
  }, 3 * 1000);
}, 1000);
