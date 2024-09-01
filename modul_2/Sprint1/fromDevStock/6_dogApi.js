// Objective: Fetch and display a random dog picture,
// showcasing the use of an API to bring joy and laughter.

const BASE_URL = "https://api.thedogapi.com/v1";

async function fetchDogPicture() {
  try {
    const response = await fetch(`${BASE_URL}/images/search?limit=10`);
    const data = await response.json();

    data.map((item) => {
      console.log(item.url);
    });
    // console.log("data", data);
    // console.log(`Here's a random dog picture for you: ${data.url}`);
  } catch (error) {
    console.error("Failed to fetch dog picture:", error);
  }
}

fetchDogPicture();
