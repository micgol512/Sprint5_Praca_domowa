// Concept: Callbacks

// Example: "We're throwing a JavaScript party and you're all invited!
// Let's use callbacks to handle the RSVPs."

function sendInvitation(guest, callback) {
  console.log(`Sending invitation to ${guest}...`);
  setTimeout(() => {
    const response = Math.random() > 0.5 ? "will attend" : "can't make it";
    console.log(`${guest} has responded and ${response}!`);
    callback(response);
  }, 2000);
}

sendInvitation("Alice", (r) => {
  console.log(`Alice's response: ${r}`);
});

sendInvitation("Bob", (r) => {
  console.log(`Bob's response: ${r}`);
});
