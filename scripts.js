console.clear();
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
function makeAlias(persons) {
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
makeAlias(personsIn);
console.log("Zadanie1", personsIn);

// Zadanie 2
function personsWithNickname(persons) {
  const nickPersons = persons.filter(
    (person) => typeof person.nickname === "string"
  );
  nickPersons.forEach(({ firstName, lastName }, indeks, key) => {
    if ((firstName.length + lastName.length) % 2 == 0) {
      nickPersons[indeks].age = firstName.length + lastName.length;
    } else {
      nickPersons[indeks].age = Math.ceil(
        Object.keys(nickPersons[indeks]).reduce(
          (sum, key) => (sum += key.length),
          0
        ) / (indeks === 0 ? 1 : index)
      );
    }
  });
  return nickPersons;
}
const personsWithAge = personsWithNickname(personsIn);
console.log("Zadanie 2:", personsWithAge);
// Zadanie 3
// Stwórz funkcję, która analizuje tablicę osób z drugiego zadania i znajduje najczęściej
//  występującą literę w polach firstName, lastName oraz nickname dla każdej osoby.
// Wynik powinien zawierać literę i jej liczbę wystąpień, a także określić, co zrobić w przypadku,
//  gdy dwie litery mają tę samą liczbę wystąpień.
// Wytyczne:
//  > Przetwarzaj każdy obiekt osoby, analizując pola firstName, lastName, i nickname.
//  > Zliczaj wystąpienia każdej litery w tych polach i znajdź najczęściej występującą literę.
//  > Jeżeli dwie lub więcej liter mają tę samą liczbę wystąpień i jest to najwyższa wartość,
//     wybierz literę, która występuje pierwsza w alfabecie.
//  > Zwróć nową tablicę z obiektami, które zawierają imię, nazwisko, pseudonim oraz dodaj nową
//     właściwość do każdej osoby o nazwie mostCommonLetter, której wartością będzie obiekt
//     z kluczem litery oraz ilością jej wystąpień.
