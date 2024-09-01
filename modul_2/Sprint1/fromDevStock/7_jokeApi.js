// Objective: Fetch and display a random joke, introducing basic error handling concepts.

async function fetchJoke(id, range, type, category, amount) {
  let search = "?";
  if (!category) {
    category = "Any";
  }
  if (id) {
    search += `&idRange=${id}`;
  }
  if (range) {
    search += `&idRange=${range}`;
  }
  if (type) {
    search += `&type=${type}`;
  }
  if (amount) {
    search += `&amount=${amount}`;
  }

  //category : Programming,Miscellaneous,Dark,Pun,Spooky,Christmas
  //albo /Any
  // ?blacklistFlags=sexist&idRange=1-319&amount=10
  try {
    const response = await fetch(
      `https://v2.jokeapi.dev/joke/${category}${search}`
    );
    const jokes = await response.json();

    if (amount) {
      // console.log(jokes);
      jokes.jokes.forEach((joke, index) => {
        setTimeout(() => {
          if (joke.type === "single") {
            console.log(`> ${index + 1} < Joke: ${joke.joke}`);
          } else {
            console.log(`> ${index + 1} < Joke:`);
            console.log(`Setup: ${joke.setup}`);
            console.log(`Delivery: ${joke.delivery}`);
          }
          console.log();
        }, index * 1000);
      });
      // console.log(jokes);
    } else {
      // console.log({ jokes });
      if (jokes.type === "single") {
        console.log(`Joke: ${jokes.joke}`);
      } else {
        console.log(`Setup: ${jokes.setup}`);
        console.log(`Delivery: ${jokes.delivery}`);
      }
    }
  } catch (error) {
    console.error("Failed to fetch joke:", error);
  }
}
fetchJoke(null, null, null, null, 4);
