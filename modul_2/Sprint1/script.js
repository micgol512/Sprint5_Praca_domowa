const BASE_URL = `http://localhost:3000`;
async function getPosts() {
  try {
    const request = await fetch(`${BASE_URL}/posts`);
    const posts = await request.json();
    console.log(posts);
  } catch (err) {
    console.error("ERROR: ", err);
  }
}
// getPosts();

async function getUsers(finder) {
  try {
    const request = await fetch(`${BASE_URL}/profile?${finder}`);
    const profiles = await request.json();
    if (!profiles.length) {
      console.error("Brak użytkowników spełniających podane kryteria.");
      return;
    }
    console.log(profiles);
  } catch (error) {
    console.error("ERROR: ", error);
  }
}
// getUsers(); //wszyscy

// getUsers("age_gt=25"); //Znajdź wszystkich użytkowników, którzy mają więcej niż 25 lat.

// getUsers("name=anna"); //Znajdź użytkownika o imieniu Anna

// getUsers("city=warszawa"); //Znajdź wszystkich użytkowników mieszkających w Warszawie

// getUsers("age_lt=30&city=kraków"); //Znajdź wszystkich użytkowników, którzy mają mniej niż 30 lat i mieszkają w Krakowie

const BASE_URL2 = `http://localhost:3000/books`;

async function addBook() {
  // const title = document.getElementById("title");
  // const author = document.getElementById("author");
  // const year = document.getElementById("year");
  // const lastRes = await fetch(`${BASE_URL}?_sort=id&_order=desc&_limit=1`);
  const lastRes = await fetch(`${BASE_URL2}`);
  const lastID = await lastRes.json();
  console.log("LAST:", lastID.length);
}
addBook();
