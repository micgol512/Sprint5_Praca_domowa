// setTimeout(() => {
//   window.alert("Witaj po opóźnieniu!");
// }, 5000);
// setTimeout(() => {
//   document.querySelector("body").style.backgroundColor = "blue";
//   setTimeout(() => {
//     document.querySelector("body").style.backgroundColor = "white";
//   }, 3000);
// }, 3000);
// let counter = 0;
// function colorChanger() {
//   //   document.querySelector("#count").innerHTML = `Licznik: ${counter} `;
//   if (counter++ % 2 == 0) {
//     document.querySelector("body").style.backgroundColor = "pink";
//   } else {
//     document.querySelector("body").style.backgroundColor = "white";
//   }
//   document.querySelector("#count").innerHTML = `Licznik: ${counter} `;
//   colorChanger();
// }
// // document.querySelector("#count").innerHTML = `Licznik: ${counter} `;
// colorChanger();

// setTimeout(() => {
//   console.log("Pierwszy");
//   setTimeout(() => {
//     console.log("Drugi");
//     setTimeout(() => {
//       console.log("Trzeci");
//     }, 2000);
//   }, 3000);
// }, 1000);

// setTimeout(() => {
//   console.log("Pierwszy");
// }, 1000);
// setTimeout(() => {
//   console.log("Drugi");
// }, 4000);
// setTimeout(() => {
//   console.log("Trzeci");
// }, 6000);

// function displayNumbersNested(n, current = 1) {
//   if (current > n) return;

//   console.log(current);
//   setTimeout(() => {
//     displayNumbersNested(n, current + 1);
//   }, 1000);
// }

// // Przykład użycia:
// displayNumbersNested(5);

// function displayNumbersLoop(n) {
//   for (let i = 1; i <= n; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }
// displayNumbersLoop(5);

// Dane do zadania 10
// const exampleUser = {
//   id: 1,
//   name: "Jan Kowalski",
//   preferences: {
//     theme: "dark",
//     language: "PL",
//   },
// };
// const exampleUser2 = {
//   id: 2,
//   name: "Jan Kowalski",
// };
// function getUser(user, callback, time) {
//   setTimeout(function () {
//     // console.clear();
//     callback(user, () => {
//       getUserPreferences(user, handleError);
//     });
//   }, time * 1000);
//   console.log("Pobieranie danych uzytkownika...");
// }
// function getUserPreferences(user, callback) {
//   if (user.preferences) callback(user);
//   else callback(null, user);
// }
// function handleError(message, error) {
//   if (error) {
//     console.error("Błąd załadowania: ", error);
//   } else {
//     console.log(
//       `Załadowano: ${message.name}.
// Preferencje:
//     motyw: "${message.preferences.theme}"
//     język: "${message.preferences.language}"`
//     );
//   }
// }
// getUser(exampleUser, getUserPreferences, 3);
// getUser(exampleUser2, getUserPreferences, 5);

//////// PROMISE
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello World");
//   }, 2 * 1000);
//   console.log("Przywitanie : ");
// });
// promise.then((result) => console.log(result));

// Napisz funkcję, która zwraca obietnicę, która najpierw rozwiązuje się z liczbą.
// Następnie użyj .then() do pomnożenia tej liczby przez 2, a potem jeszcze raz użyj
// .then() do dodania 10 do wyniku. Na końcu wyświetl ostateczny wynik do konsoli.

// const promise = new Promise((resolve, reject) => {
//   resolve(3);
// });
// promise
//   .then((res) => {
//     res *= 2;
//   })
//   .then((res) => {
//     res += 10;
//     console.log(res);
//   });

// function processNumber(number) {
//   return new Promise((resolve, reject) => {
//     if (number % 2 === 0) {
//       resolve(number);
//     } else {
//       reject("Liczba nieparzysta");
//     }
//   });
// }
// processNumber(4)
//   .then((result) => {
//     return result * 2;
//   })
//   .then((result) => {
//     return result + 10;
//   })
//   .then((finalResult) => {
//     console.log(finalResult);
//   })
//   .catch((error) => {
//     console.error("Błąd:", error);
//   });

// function random() {
//   return new Promise((resolve, reject) => {
//     const s = Math.floor(Math.random() * 10);
//     console.log(s);

//     if (s % 2 === 0) resolve("Succces! ${}");
//     else reject("Failed!");
//   });
// }
// random()
//   .then((result) => console.log(result))
//   .catch((result) => console.error(result));

// function deepEqual(obj1, obj2) {
//   if (obj1 === obj2) {
//     return true;
//   }

//   if (
//     typeof obj1 !== "object" ||
//     obj1 === null ||
//     typeof obj2 !== "object" ||
//     obj2 === null
//   ) {
//     return false;
//   }

//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
//       return false;
//     }
//   }

//   return true;
// }

// const users = [
//   {
//     id: 1,
//     name: "Jan Kowalski",
//     preferences: {
//       theme: "dark",
//       language: "PL",
//     },
//   },
//   {
//     id: 2,
//     name: "Karol Nowak",
//     preferences: {
//       theme: "light",
//       language: "PL",
//     },
//   },
//   {
//     id: 3,
//     name: "Alina Kowalska",
//     preferences: {
//       theme: "dark",
//       language: "ENG",
//     },
//   },
// ];
// const exampleUser = {
//   id: 1,
//   name: "Jan Kowalski",
//   preferences: {
//     theme: "dark",
//     language: "PL",
//   },
// };
// const getUser = (user) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Pobieranie danych użytkownika...");
//       const userData = exampleUser;
//       const userExists = users.some((user) => deepEqual(user, exampleUser));
//       if (userExists) {
//         resolve(userData);
//       } else {
//         reject("Taki Użytkownik nie istnieje");
//       }
//       // Tutaj zakładamy, że nie ma błędu i zawsze zwracamy userData
//       resolve(userData);
//       // reject("Taki Użytkownik nie istnieje");
//     }, 1000);
//   });
// };

// const getUserPreferences = (user) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Pobieranie preferencji użytkownika:", user.name);
//       const preferences = user.preferences;
//       // Podobnie jak wyżej, zakładamy, że nie ma błędu
//       resolve(preferences);
//       // reject("Brak preferencji");
//     }, 2 * 1000);
//   });
// };

// const handleError = (message, error) => {
//   console.error(message, error);
// };

// // Funkcja asynchroniczna używająca async/await
// const fetchUserAndPreferences = async (user) => {
//   try {
//     const fetchedUser = await getUser(user);
//     const preferences = await getUserPreferences(fetchedUser);
//     console.log(`Dane użytkownika ${fetchedUser.name}:`, preferences);
//   } catch (error) {
//     handleError("Wystąpił błąd", error);
//   }
// };

// // Wywołanie funkcji asynchronicznej
// fetchUserAndPreferences(exampleUser);

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(false);
//   }, 3000);
// });

// promise
//   .then((response) => {
//     console.log("Prmiese resolved with data: ", response);
//   })
//   .catch((err) => console.log("wystąpił błąd", err));

// function orderPizza(flavor) {
//   return new Promise((resolve, reject) => {
//     console.log(`Ordering a ${flavor} pizza for the party...`);
//     setTimeout(() => {
//       const problem = Math.random() > 0.5;
//       if (problem) {
//         reject(`Problem with the ${flavor} pizza order!`);
//       } else {
//         resolve(`Delivered ${flavor} pizza!!!`);
//       }
//     }, 3000);
//   });
// }
// orderPizza("Pepperoni")
//   .then((message) => {
//     console.log(`Hooray! ${message}`);
//   })
//   .catch((error) => {
//     console.error(`Oh no!!! ${error}`);
//   })
//   .finally(() => {
//     console.log(`Party cleanup in progress...`);
//   });

// let i = 1;
// const stopID = setInterval(() => {
//   console.log(i++);
//   if (i > 5) {
//     clearInterval(stopID);
//   }
// }, 1000);

// const time1 = Math.floor(Math.random() * 5 + 1) * 1000;
// const time2 = Math.floor(Math.random() * 5 + 1) * 1000;
// const time3 = Math.floor(Math.random() * 5 + 1) * 1000;
// console.log({ time1, time2, time3 });

// const orderPizza = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Pizza is ready!");
//   }, time1);
// });
// const decorateRoom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Room is decorated!");
//   }, time2);
// });
// const preparePlaylist = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Palaylist is set");
//   }, time3);
// });

// Promise.all([orderPizza, decorateRoom, preparePlaylist]).then((results) => {
//   console.log("Party setup complete");
//   results.forEach((result) => console.log(result));
// });

// function delayWithTimeCheck(timeDelay) {
//   return new Promise((resolve, reject) => {
//     if (timeDelay === undefined) {
//       return;
//     }
//     if (typeof timeDelay !== "number") {
//       reject("Invalid time.");
//     } else if (timeDelay < 0) {
//       reject("Time must be a positive number.");
//     } else {
//       setTimeout(() => {
//         resolve("Completed successfully.");
//       }, timeDelay);
//     }
//   });
// }
// async function runDelayCheck() {
//   try {
//     const wait = await delayWithTimeCheck(2000);
//     console.log(wait);
//   } catch (error) {
//     console.error("ERROR: ", error);
//   }
// }
// runDelayCheck();

// let time = 1;

// function simulateAsyncProcess(data) {
//   const random = Math.random() > 0.5;
//   console.log("RANDOM:", random);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (random) {
//         resolve(`Czekanie: ${time}s.
//         Dane: ${data}`);
//       } else {
//         reject("Wystąpił błąd podczas przetwarzania");
//       }
//     }, time * 1000);
//   });
// }
// async function main() {
//   try {
//     const result = await simulateAsyncProcess("Jakieś dane ");
//     console.log(`${result} - przetworzone`);
//   } catch (error) {
//     console.log(error);
//   }
// }
// main();
// time = 3;
// main();

////////FETCH

const BASE_URL = `https://jsonplaceholder.typicode.com`;

async function getUser(id) {
  await fetch(`${BASE_URL}/users/${id}`)
    .then((response) => response.json())
    .then((json) => console.log("USER: ", json));
}
// getUser(1);

async function getPost(id) {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    const data = await response.json();
    console.log(`POST: 
  Title: ${data.title}
    Body: ${data.body}`);
  } catch (error) {
    console.error(`ERROR: ${error}`);
  }
}
// getPost(17);

async function getPostFromOneTo(id) {
  const posts = [];
  console.log("Pobieranie danych...");
  for (let i = 1; i <= id; i++) {
    try {
      const response = await fetch(`${BASE_URL}/posts/${i}`);
      const data = await response.json();
      posts.push(data);
    } catch (error) {
      console.error(`ERROR: ${error}`);
    }
  }
  posts.forEach(({ title }, index) =>
    console.log(`Title ${index + 1}: ${title}`)
  );
}
// getPostFromOneTo(4);

async function getUserBy(city) {
  let users;
  try {
    const response = await fetch(`${BASE_URL}/users/`);
    users = await response.json();
    console.log("Pobrano użytkowników.");
  } catch (error) {
    console.error(`ERROR: ${error}`);
    return;
  }
  console.log("Filtrowanie danych...");

  const filteredUsers = users.filter(
    (user) => user.address.city.toLowerCase() === city.toLowerCase()
  );
  setTimeout(() => {
    filteredUsers.forEach(({ username, email }) => {
      console.log(`Dane użytkownika mieszkającego w "${city}":
        N A M E: ${username}
        E- MAIL: ${email}
        `);
    });
  }, 2 * 1000);
}
getUserBy("Gwenborough");
