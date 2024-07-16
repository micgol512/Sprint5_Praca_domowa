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
  persons.forEach((person) => {
    let nick = "";
    if (
      typeof person.firstName === "string" &&
      typeof person.lastName === "string" &&
      person.firstName.length >= 3 &&
      person.lastName.length >= 3
    ) {
      nick =
        cuttingLetters(null, -3, person.firstName) +
        cuttingLetters(0, 3, person.lastName);
      nick = nick[0].toUpperCase() + nick.slice(1);
      person.nickname = nick;
    }
  });
}
function cuttingLetters(start, end, string) {
  if (end < 0) {
    return string.slice(end).toLowerCase().split("").reverse().join("");
  } else {
    return string.slice(start, end).toLowerCase().split("").reverse().join("");
  }
}
makeNickname(personsIn);
console.log("Zadanie 1: ", personsIn);

// Zadanie 2
function personsWithNickname(persons) {
  const nickPersons = persons.filter(
    (person) => typeof person.nickname === "string"
  );
  nickPersons.forEach(({ firstName, lastName }, indeks) => {
    let age = firstName.length + lastName.length;
    if (age % 2 !== 0) {
      age = Math.ceil(
        Object.keys(nickPersons[indeks]).reduce(
          (sum, key) => (sum += key.length),
          0
        ) / (indeks === 0 ? 1 : index)
      );
    }
    nickPersons[indeks].age = age;
  });
  return nickPersons;
}
const personsWithAge = personsWithNickname(personsIn);
console.log("Zadanie 2:", personsWithAge);

// Zadanie 3
function mostPopularChar(word) {
  const wordTab = word.toLowerCase().split("");
  let counts = {};
  wordTab.forEach((value) => {
    //Tu podziękowania za ostatniego live z pytaniem o sprawdzanie czy liczba "undefined" wiele mi tu uprościło :)
    counts[value] = (counts[value] || 0) + 1;
  });
  counts = Object.entries(counts).reduce((max, curr) => {
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
  return counts;
}
function analyzePersons(persons) {
  persons.forEach((element) => {
    const temp = mostPopularChar(
      element.firstName + element.lastName + element.nickname
    );
    element.mostCommonLetter = { letter: temp[0], count: temp[1] };
  });
}

analyzePersons(personsWithAge);
console.log("Zadanie 3: ", personsWithAge);
