// Concept: Callback Hell

// Example: "Let's embark on a JavaScript adventure, but beware of the callback hell! 
// Each decision leads to another, and it gets tricky to follow the path."

function startAdventure() {
  console.log('You find yourself in a dark room. Do you go left or right?');

  setTimeout(() => {
    // First decision
    console.log('You decide to go left and encounter a dragon! Do you fight or flee?');
    
    setTimeout(() => {
      // Second decision
      console.log('You choose to fight the dragon and... find a treasure chest!');
      
      setTimeout(() => {
        // Treasure chest
          console.log('You open the chest to find a shiny JavaScript book. You win!');
      }, 2000);
    }, 2000);
  }, 2000);
}

startAdventure();