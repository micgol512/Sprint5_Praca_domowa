// Concept: setInterval, clearInterval

// Example: "Let's do a fun workout with JavaScript! We'll use setInterval to 
// create a continuous workout routine.If we get too tired, we can use clearInterval to take a rest."

let workoutIntervalId;
let repetitions = 0;

function startWorkout() {
  console.log('Starting workout routine. Let\'s get moving!');

  workoutIntervalId = setInterval(() => {
    repetitions++;
    console.log(`Jumping jacks: ${repetitions}`);
    
    if (repetitions === 10) {
      console.log('Great job! You completed the workout!');
      clearInterval(workoutIntervalId);
    }
  }, 1000); // Do a jumping jack every second
}

startWorkout();