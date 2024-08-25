// // const add = (x) => (y) => x + y;
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// const addFive = add(5);
// console.log(addFive(3));

// function convert(rate) {
//   return function (amount) {
//     return (amount * rate).toFixed(2);
//   };
// }
// const convertToEUR = convert(4.58);
// console.log(convertToEUR(22));

// const configureLegalAge = (minAge) => (currAge) => minAge <= currAge;
// const legalAgeInPoland = configureLegalAge(18);
// const legalAgeInUSA = configureLegalAge(21);
// const age = 19;
// console.log(`Czy wiek ${age} jest legalny w Polsce? ${legalAgeInPoland(age)}`);
// console.log(`Czy wiek ${age} jest legalny w USA? ${legalAgeInUSA(age)}`);

// function message(head) {
//   return function (body) {
//     return function (footer) {
//       return `Tittle:${head}
// Message:
// ${body}
// ---
// Footer: ${footer}`;
//     };
//   };
// }
// const head = message("Nagłówek pierwszej strony");
// const body = head("Tutaj jest właściwa wiadomość tekstowa");
// console.log(body("Michał Gołębiwoski"));

// function countCharacters(string) {
//   if (string.length === 0) {
//     return 0;
//   } else return 1 + countCharacters(string.slice(1));
// }

// console.log(countCharacters("Michał"));

// function countLetter(letter, word) {
//   if (word !== "") {
//     if (word.charAt() === letter) {
//       return 1 + countLetter(letter, word.slice(1));
//     } else return 0 + countLetter(letter, word.slice(1));
//   } else return 0;
// }
// console.log(countLetter("o", "filozofia"));

// function findMax(array, max = -Infinity, index = 0) {
//   if (index < array.length) {
//     if (typeof array[index] === "number" && array[index] > max)
//       max = array[index];
//     return findMax(array, max, index + 1);
//   }
//   return max;
// }

// const numbers = [4, 2, 125, undefined, 1256, false, 12, 124, 2146, "12993"];
// console.log("Wynik Funkcji", findMax([1, 2, 3, 4, 2, 3, 5, 3, 2]));
// console.log("Wynik Funkcji", findMax(numbers));

//////
// const hoverMe = document.getElementById("container");
// hoverMe.addEventListener("mouseover", function () {
//   this.style.backgroundColor = "red";
// });
// hoverMe.addEventListener("mouseout", function () {
//   this.style.backgroundColor = "white";
// });

// const dynamicObject = {
//   name: "Emil",
//   age: 24,
//   addProperty(key, value) {
//     this[key] = value;
//   },
// };
// dynamicObject.addProperty("surname", "Kowalski");
// console.log(dynamicObject);

// const collection = {
//   items: [1, 2, 3],
//   printItems() {
//     this.items.forEach((item) => console.log(`Item: ${item}`));
//   },
// };
// collection.printItems();

// const numberCollection = {
//   items: [1, 2, 3, 4, 5, 6],
//   sortItems() {
//     this.even = this.items.filter((item) => item % 2 === 0);
//     this.odd = this.items.filter((item) => item % 2 !== 0);
//   },
// };
// numberCollection.sortItems();
// console.log("Even items:", numberCollection.even);
// console.log("Odd items:", numberCollection.odd);

// class Book {
//   constructor(title, author) {
//     this.title = title;
//     this.author = author;
//   }
//   displayInfo() {
//     return `Książka "${this.title}" autora: ${this.author}`;
//   }
// }
// const nowosc = new Book("Ogniem i mieczem", "H. Sienkiewicz");
// console.log(nowosc.displayInfo());

// class Counter {
//   constructor(count = 0) {
//     this.count = count;
//   }
//   increment() {
//     this.count++;
//   }
//   getValue() {
//     return this.count;
//   }
// }
// const licz = new Counter();
// licz.increment();
// console.log(licz.getValue());

// class Temperature {
//   constructor(celcius) {
//     this.celcius = celcius;
//   }
//   toFahrenheit() {
//     return this.celcius * 1.8 + 32;
//   }
// }
// const temperature = new Temperature(25);
// console.log(temperature.toFahrenheit());

// class Student {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.grades = {};
//   }
//   addGrade(subject, grade) {
//     if (isFinite(this.grades[subject])) {
//       this.grades[subject].push(grade);
//     } else {
//       this.grades[subject] = [grade];
//     }
//   }
//   getGrades(subject = "") {
//     return subject === "" ? this.grades : this.grades[subject];
//   }
// }
// const kowalski = new Student("Jan", 32);
// kowalski.addGrade("Matemetyka", 5);
// kowalski.addGrade("Informatyka", 4);
// kowalski.addGrade("Informatyka", 5);
// kowalski.addGrade("Fizyka", 2);
// console.log(kowalski.getGrades("Informatyka"));

// class Ractangle {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   calculateArea() {
//     return this.a * this.b;
//   }
//   calculateParameter() {
//     return 2 * (this.a + this.b);
//   }
// }
// const prostokat = new Ractangle(2, 6);
// console.log(
//   `Obwód: ${prostokat.calculateParameter()} Pole: ${prostokat.calculateArea()}`
// );

// class Vehicle {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
// }
// class Car extends Vehicle {
//   constructor(brand, year, model, fuelType) {
//     super(brand, year);
//     this.model = model;
//     this.fuelType = fuelType;
//   }
//   displayInfo() {
//     return `Samochód marki: ${this.brand} model: ${this.model} z ${this.year}r.
// Rodzaj paliwa: ${this.fuelType}`;
//   }
// }
// const samochod = new Car("Fiat", 1991, "126p", "benzyna");
// console.log(samochod.displayInfo());

// const people = [
//   {
//     name: "Michał",
//     age: 33,
//   },
//   {
//     name: "Bartek",
//     age: 23,
//   },
//   {
//     name: "Kuba",
//     age: 3,
//   },
// ];
// function getNames(item, index, array) {
//   return item.name;
// }
// Array.prototype.customMap = function (callback) {
//   const result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };
// const names = people.map(getNames);
// const names2 = people.customMap(getNames);
// console.log("names", names);
// console.log("names2", names2);

// const numbers = [1, 2, 3, 4, 2, 3, 5, 3, 2];
// const numbers2 = [-1, 2, 3, 4, 2, 3, 5, 3, 2];
// function czyWiekszeOdZera(item, index, array) {
//   return item > 0;
// }
// // Array.prototype.customEvery = function (callback) {
// //   let isAll = [];
// //   for (let i = 0; i < this.length; i++) {
// //     isAll.push(callback(this[i]));
// //   }
// //   return !isAll.includes("false");
// // };
// Array.prototype.customEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i], i, this)) {
//       return false;
//     }
//   }
//   return true;
// };
// const spr1 = numbers.every(czyWiekszeOdZera);
// const spr2 = numbers2.customEvery(czyWiekszeOdZera);

// console.log("spr1", spr1);
// console.log("spr2", spr2);

// const numbers = [1, 2, -3, 4, 2, 3, 5, 3, 2, 0];

// Array.prototype.customSome = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       return true;
//     }
//   }
//   return false;
// };
// function allPositive(number, index, array) {
//   return number === 0;
// }
// console.log(numbers.some(allPositive));
// console.log(numbers.customSome(allPositive));

// const numbers = [1, 2, -3, 4, 2, 3, 5, 3, 2, 0];

// Array.prototype.customFind = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       return this[i];
//     }
//   }
//   return undefined;
// };
// function allPositive(number, index, array) {
//   return number > 2;
// }
// console.log(numbers.find(allPositive));
// console.log(numbers.customFind(allPositive));

// const cords = { x: 22, y: 13 };
// const coordinatation = ({ x, y }) => {
//   console.log(`Punkt ma współrzędne x: ${x}, y: ${y}`);
// };
// coordinatation(cords);

// const osoby = [
//   { imie: "Anna", wiek: 22 },
//   { imie: "Bartek", wiek: 28 },
// ];
// for (let { imie, wiek } of osoby) {
//   console.log(`Osoba ${imie} ma ${wiek} lat.`);
// }

/////////////////////////////////////////////////////
// const products = [
//   {
//     id: 1,
//     name: "Kawa Arabica",
//     price: 19.99,
//     description: "Wysokiej jakości kawa ziarnista.",
//   },
//   {
//     id: 2,
//     name: "Kawa Robusta",
//     price: 16.99,
//     description: "Mocna i intensywna kawa ziarnista.",
//   },
//   {
//     id: 3,
//     name: "Kawa Michała",
//     price: 12.99,
//     description: "Zalewajka parzajka",
//   },
// ];

// function renderProducts() {
//   const cointainer = document.getElementById("products-container");
//   products.forEach(({ id, name, price, description }) => {
//     const productCard = document.createElement("div");
//     productCard.setAttribute("id", `product-card-${id}`);
//     productCard.innerHTML = `
//                     <h2>${name}</h2>
//                     <p>${description}</p>
//                     <p>Cena: ${price} zł</p>
//                 `;
//     cointainer.append(productCard);
//   });
// }
// document
//   .getElementById("something")
//   .addEventListener("click", renderProducts, { once: true });
/////////////////////////////////////////////////////////////////

// const initialObject = { name: "Kawa Arabica" };
// const newObject = addProperties(
//   initialObject,
//   ["price", 19.99],
//   ["product", "t-shirt"],
//   ["age", 25]
// );

// function addProperties(obj, ...arrays) {
//   const final = { ...obj };
//   const properties = arrays;
//   properties.forEach(([key, value]) => {
//     final[key] = value;
//   });
//   return final;
// }
// console.log("Nowy Objekt:", newObject);

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };
function mergeObjects(...obj) {
  return obj.reduce((final, curr) => {
    return { ...final, ...curr };
  }, {});
}
console.log(obj1, obj2, obj3);
console.log("Połączone:", mergeObjects(obj1, obj2, obj3));
