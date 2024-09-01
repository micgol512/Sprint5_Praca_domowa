// Objective: Fetch and display information about a random Star Wars character.

async function fetchStarWarsCharacter(id) {
  if (id > 83) {
    console.log("Postać nie została znaleziona");
    return;
  }

  try {
    const response = await fetch(`https://swapi.dev/api/people/${id}`);
    const character = await response.json();

    if (character.detail === "Not found") {
      console.log("Postać nie została znaleziona");
      return;
    }

    console.log(`Character: ${character.name}`);
    console.log(`Birth Year: ${character.birth_year}`);
    console.log(`Gender: ${character.gender}`);
  } catch (error) {
    console.error("Failed to fetch character:", error);
  }
}

fetchStarWarsCharacter(10);
fetchStarWarsCharacter(8);
