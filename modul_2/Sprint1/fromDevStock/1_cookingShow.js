// Concept: setTimeout, clearTimeout

// Example: "Let's bake a virtual cake! Each step takes time, so we'll use setTimeout
// to wait for the cake to bake.But if we change our minds about the flavor,
// we can always stop the baking process with clearTimeout."

console.log("Welcome to the JavaScript Cooking Show!");

let bakeCakeTimeout;
let cakeIsReady = false;
function startBaking(flavor) {
  console.log(`Starting to bake a ${flavor} cake. Please wait...`);

  bakeCakeTimeout = setTimeout(() => {
    console.log(`${flavor} cake is ready! Enjoy your delicious treat!`);
    cakeIsReady = true;
  }, 5000); // 5 seconds to bake a cake
}

function stopBaking() {
  if (!cakeIsReady) {
    clearTimeout(bakeCakeTimeout);
    console.log("Stopped baking. Let's try a different recipe next time.");
  }
}

startBaking("chocolate");
// Assume we changed our mind about the flavor
setTimeout(stopBaking, 6000); // Stop baking after 2 seconds
