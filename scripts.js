const personsIn = [
  {
    firstName: false,
    lastName: 2,
  },
  {
    firstName: "Roman",
    lastName: "Kowalski",
  },

  {
    firstName: "Halina",
    lastName: "Malina",
  },
  {
    firstName: "B",
    lastName: "22",
  },
  {
    firstName: "Jan",
    lastName: "Nowak",
  },
  {
    firstName: "Kamil",
    lastName: null,
  },
];
// ZADANIE 1
function makeNickname(persons) {
  return persons.map((person) => {
    if (
      typeof person.firstName === "string" &&
      typeof person.lastName === "string" &&
      person.firstName.length >= 3 &&
      person.lastName.length >= 3
    ) {
      const preNick = person.firstName
        .slice(-3)
        .toLowerCase()
        .split("")
        .reverse()
        .join("");
      const afterNick = person.lastName
        .slice(0, 3)
        .toLowerCase()
        .split("")
        .reverse()
        .join("");
      const nick = `${preNick}${afterNick}`;
      return {
        ...person,
        nickname: `${nick[0].toUpperCase()}${nick.slice(1)}`,
      };
    } else {
      return {
        ...person,
      };
    }
  });
}

const personsEx1 = makeNickname(personsIn);
console.log("Zadanie 1: ", personsEx1);

// Zadanie 2
function personsWithNickname(persons) {
  return persons
    .filter((person) => person.nickname)
    .map((person, index) => {
      let age = person.firstName.length + person.lastName.length;
      if (age % 2 === 1) {
        age = Math.ceil(
          Object.keys(person).reduce((sum, key) => (sum += key.length), 0) /
            (index === 0 ? 1 : index)
        );
      }
      return {
        ...person,
        age,
      };
    });
}
const personsWithAge = personsWithNickname(personsEx1);
console.log("Zadanie 2:", personsWithAge);

// Zadanie 3
function mostPopularChar(word) {
  const wordTab = word
    .toLowerCase()
    .split("")
    .map((value) => ({ [value]: 1 }))
    .reduce((acc, curr) => {
      const key = Object.keys(curr)[0];
      acc[key] = (acc[key] || 0) + curr[key];
      return acc;
    }, {});
  return Object.entries(wordTab).reduce((max, curr) => {
    if (curr[1] > max[1]) {
      return curr;
    } else if (curr[1] < max[1]) {
      return max;
    } else if (curr[1] === max[1]) {
      if (curr[0] > max[0]) {
        return max;
      } else if (curr[0] < max[0]) {
        return curr;
      }
    }
  });
}
function analyzePersons(persons) {
  persons.forEach((element) => {
    const temp = mostPopularChar(
      `${element.firstName}${element.lastName}${element.nickname}`
    );
    element.mostCommonLetter = { letter: temp[0], count: temp[1] };
  });
}

analyzePersons(personsWithAge);
console.log("Zadanie 3: ", personsWithAge);
