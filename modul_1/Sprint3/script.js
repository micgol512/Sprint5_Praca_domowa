console.clear();
// console.log("---------")
// const name = "Michał";
// console.log(name);
// console.log("---------")
// const numberA = 12;
// const numberB = 8;
// let sum = numberA + numberB;
// console.log(sum);
// console.log("---------")
// const variableConst = 10;
// // variableConst = 10;
// let variableLet = 5;
// variableLet = 15;
// console.log(variableLet);
// console.log("---------")

// let bokKwadratu = 2;
// let poleKwadratu = bokKwadratu * bokKwadratu;
// console.log(poleKwadratu);

// const string = "Bart";
// const number = 10;
// const boolean = true;
// const nullable = null;
// let undefinedValue;

// console.log("-> Type of: ", typeof string);
// console.log("-> Type of: ", typeof number);
// console.log("-> Type of: ", typeof boolean);
// console.log("-> Type of: ", typeof nullable);
// console.log("-> Type of: ", typeof undefinedValue);

// const userInfo = {
//   name: "Alex",
//   age: 28,
// };
// const myArray = [2024, "OpenAI", userInfo];
// //console.log(Array.isArray(myArray));
// // console.log(myArray[2].name);
// const myObject = {
//   year: 2024,
//   framework: "React",
//   languages: ["JavaScript", "TypeScript", "Python"],
// };
// //console.log("year:",myObject.year,"\nframework:",myObject.framework,"\nlanguages:",myObject.languages);

// const currentDate = new Date();
// const isDate = currentDate instanceof Date;
// console.log(isDate);

// let a = [1, 2, 3];
// const b = a;
// console.log({ a, b });
// b.push(4, 5);
// a = 2;
// console.log({ a, b });
// b.pop();
// b.reverse();
// console.log({ a, b });

// const numberA = 10;
// const numberB = 20;
// const isEqual = numberA == numberB;
// const isNotEqual = numberA != numberB;
// console.log({ isEqual, isNotEqual });

// const valueA = 5;
// const valueB = "5";
// const areStrictlyEqual = valueA === valueB;
// const areLooselyEqual = valueA == valueB;
// console.log({ areStrictlyEqual, areLooselyEqual });

// const agePeter = 30;
// const ageSarah = 25;
// const isSarahYounger = ageSarah < agePeter;
// console.log("Czy Sarah młodsza?", isSarahYounger);

// const score = 75;
// const isPass = score >= 60;
// const isExcellent = score >= 90;
// console.log({ isPass, isExcellent });

// const isSaturday = new Date().getDay() == 3;
// console.log({ isSaturday });
// const isSunday = new Date().getDay() == 0;
// console.log({ isSunday });
// const isWeekend = new Date().getDay() == 0 || new Date().getDay() == 6;
// console.log({ isWeekend });

// let userInput = prompt("Wprowadź jakąś wartość:") ?? "Anonimowy";
// console.log({ userInput });

// const userAge = 18;
// const parentalConsent = false;
// const hasRequiredAge = userAge >= 18;
// const hasParentalConsent = userAge < 18 && parentalConsent;
// const isEligibleForContest = hasRequiredAge || hasParentalConsent;
// console.log({ isEligibleForContest });

// const productOutOfStock = false; //czy wyprzedany
// const isProductAvailable = !productOutOfStock;
// console.log({ productOutOfStock, isProductAvailable });

// const number1 = 1;
// const number2 = 2;
// const number3 = 3;
// const number4 = 4;
// const number5 = 5;
// const sum = number1 + number2 + number3 + number4 + number5;
// console.log("Suma liczb wynosi :", sum);
// function reszta(x) {
//   return x % 2;
// }
// const isNum1 = reszta(number1) === 0;
// const isNum2 = reszta(number2) === 0;
// const isNum3 = reszta(number3) === 0;
// const isNum4 = reszta(number4) === 0;
// const isNum5 = reszta(number5) === 0;
// console.log(number1, isNum1 ? "- parzysta" : "-nieparzysta");
// console.log(number2, isNum2 ? "- parzysta" : "-nieparzysta");
// console.log(number3, isNum3 ? "- parzysta" : "-nieparzysta");
// console.log(number4, isNum4 ? "- parzysta" : "-nieparzysta");
// console.log(number5, isNum5 ? "- parzysta" : "-nieparzysta");
// // console.log(
// //   "Liczba : ",
// //   number1,
// //   " jest ",
// //   reszta(number1) ? "nieparzysta " : " parzysta"
// // );
// // console.log(
// //   "Liczba : ",
// //   number2,
// //   " jest ",
// //   reszta(number2) ? "nieparzysta " : " parzysta"
// // );
// // console.log(
// //   "Liczba : ",
// //   number3,
// //   " jest ",
// //   reszta(number3) ? "nieparzysta " : " parzysta"
// // );
// // console.log(
// //   "Liczba : ",
// //   number4,
// //   " jest ",
// //   reszta(number4) ? "nieparzysta " : " parzysta"
// // );
// // console.log(
// //   "Liczba : ",
// //   number5,
// //   " jest ",
// //   reszta(number5) ? "nieparzysta " : " parzysta"
// // );

// const ageList = [18, 22, 15, 30, 25];
// const nextYearAges = [
//   ++ageList[0],
//   ++ageList[1],
//   ++ageList[2],
//   ++ageList[3],
//   ++ageList[4],
// ];
// ageList[0]--;
// ageList[1]--;
// ageList[2]--;
// ageList[3]--;
// ageList[4]--;
// console.log({ ageList, nextYearAges });

// const votesForOptionA = 60;
// const votesForOptionB = 30;
// const totalVotes = 120;
// const percentageOfA = (votesForOptionA / totalVotes) * 100;
// const percentageOfB = (votesForOptionB / totalVotes) * 100;
// const votesPercentage = { percentageOfA, percentageOfB };

// console.log("Opcja A:", votesPercentage.percentageOfA, "%");
// console.log("Opcja B:", votesPercentage.percentageOfB, "%");

// const fullName = "  Michał Gołębiowski ";
// const formattedName = fullName.trim().toUpperCase();
// console.log({ formattedName });

// const simpleText =
//   "Kurs JavaScript. Pozwala nauczyć sie JavaScript w zastosowaniu";
// const searchWorld = "JavaScript";
// const hasJavaScript = simpleText.toLowerCase().match(searchWorld.toLowerCase());
// console.log(
//   `W zdaniu:\n"${simpleText}"\n${
//     hasJavaScript ? "Występuje" : "Nie występuje"
//   } słowo "${searchWorld}"`
// );

// const myName = " Michał ";
// const firstLetter = myName.trim().charAt(0);
// console.log({ firstLetter });

// const zdanie = "Ala ma kota a kot ma Ale";
// const indexOfCat = zdanie.indexOf("kot");
// const doesCatExist = indexOfCat != -1;
// console.log({ doesCatExist });

// const number = 255.20323;
// const hexString = parseInt(number.toFixed(0)).toString(16);
// console.log(`Powstała liczba: "${hexString}" jest typu: ${typeof hexString}.`);

// const formattedNumber = number.toFixed(2);
// console.log(
//   `Powstała liczba: "${formattedNumber}" jest typu: ${typeof formattedNumber}.`
// );

// const valueNaN = "ala" / 0;
// const isValueNaN = isNaN(valueNaN);
// console.log(`Wartość value${isValueNaN ? "" : " nie"} jest NaN'em :) `);

// const valueInf = 5 / 0;
// const isValueFinite = isFinite(valueInf);
// console.log(`Wartość value jest${isValueFinite ? " " : " nie"}skończona :) `);

// const email = "siMPLe@Example.CoM";
// const age = 12;
// const emailLowerCase = email.toLowerCase();
// const isAdult = age >= 18;
// const isValidEmail = !!emailLowerCase.match("@");
// const userProfile = {
//   firstName: "Michał",
//   lastName: "Gołębiowski",
//   isAdult,
//   emailLowerCase,
//   isValidEmail,
// };
// console.log({ userProfile });

// const fullName = `${userProfile.firstName} ${userProfile.lastName}`;
// console.log(fullName);
// console.log(`"${fullName}" jest typu: ${typeof fullName}.`);

// const film = {
//   title: "Dragon Ball",
//   director: "Daisuke Nishio",
//   release: 1986,
// };
// console.log(
//   `Mój ulubiony film to ${film.title}, wyreżyserowany przez ${film.director} w roku ${film.release}.`
// );

// const activity1 = "bieganie";
// const activity2 = "chodzenie";
// const activity3 = "jazda na rowerze";
// console.log(`Dziś planuję: ${activity1}, ${activity2} oraz ${activity3}.`);

// const list = [
//   { name: "Sok pomidorowy", price: 3.49, quantity: 2 },
//   { name: "Chleb", price: 5.88, quantity: 1 },
//   { name: "Masło", price: 8.24, quantity: 2 },
//   { name: "Chipsy", price: 3.18, quantity: 4 },
// ];
// const budget = 100;
// const sum =
//   list[0].price * list[0].quantity +
//   list[1].price * list[1].quantity +
//   list[3].price * list[3].quantity;
// console.log(sum);
// let rest = budget - sum;
// console.log(`"Podsumowanie zakupów:
// ${list[0].name}: Liczba sztuk: ${list[0].quantity}, cena za sztukę: $ ${list[0].price}
// ${list[1].name}: Liczba sztuk: ${list[1].quantity}, cena za sztukę: $ ${list[1].price}
// ${list[2].name}: Liczba sztuk: ${list[2].quantity}, cena za sztukę: $ ${list[2].price}
// ${list[3].name}: Liczba sztuk: ${list[3].quantity}, cena za sztukę: $ ${list[3].price}
// Całkowity koszt: $ ${sum}
// Pozostało: $${rest}`);

// const userA = {
//   age: 18,
//   experience: 2,
// };
// if (userA.age >= 18 && userA.experience >= 2) {
//   console.log(`Kwalifikujesz się na wydarzenie.`);
// } else {
//   console.log(`Nie spełniasz wymagań.`);
// }
// // // pytanie inline
// // console.log(
// //   `${
// //     userA.age >= 18 && userA.experience >= 2
// //       ? "Kwalifikujesz się na wydarzenie"
// //       : "Nie spełniasz wymagań"
// //   }.`
// // );

// const score = 4;
// console.log(
//   score >= 8
//     ? "Rewelacyjny film!"
//     : score >= 5
//     ? "Dobry film."
//     : "Może warto wybrać inny film?"
// );

// const greeting = new Date().getHours();
// console.log(greeting > 18 ? "Dobry wieczór." : "Dzień dobry");

// const menuOption = 2;
// switch (menuOption) {
//   case 1:
//     console.log(`Wybrano opcję pierwszą: Profil użytkownika`);
//     break;
//   case 2:
//     console.log(`Wybrano opcję drugą: Ustawienia`);
//     break;
//   case 3:
//     console.log(`Wybrano opcję trzecią: Moje kursy`);
//     break;
//   case 4:
//     console.log(`Wybrano opcję czwartą: Wyloguj`);
//     break;
//   default:
//     console.log(`Nieznana opcja menu`);
// }

// const weatherInfo = {
//   type: ["Sunny", "Rainy", "Cloudy"],
//   wind: 34,
// };
// const temperature = 18;
// const timeAvailable = 3;
// const actualType = "Sunny";

// const isTemperatureValid =
//   isFinite(temperature) && temperature > -10 && temperature < 40;

// for (let i = 0; i < weatherInfo.type.length; i++) {
//   weatherInfo.type[i] = weatherInfo.type[i].toLowerCase();
// }

// if (!isTemperatureValid) {
//   console.log(`Nieprawidłowa wartość temperatury!`);
// } else {
//   if (
//     weatherInfo.type[0].includes(actualType.toLowerCase()) &&
//     timeAvailable > 4
//   ) {
//     console.log(`Idź na długą wycieczkę rowerową!`);
//   } else if (
//     weatherInfo.type[0].includes(actualType.toLowerCase()) &&
//     timeAvailable <= 4
//   ) {
//     console.log(`Zaplanuj piknik w parku!`);
//   } else if (weatherInfo.type[2].includes(actualType.toLowerCase())) {
//     console.log(`Odwiedź muzeum lub galerię sztuki!`);
//   } else if (weatherInfo.type[1].includes(actualType.toLowerCase())) {
//     console.log(`Zorganizuj maraton filmowy w domu!`);
//   } else {
//     console.log(`Nieznane warunki pogodowe, zdecyduj sam!`);
//   }
//   if (weatherInfo.wind > 20) {
//     console.log(`Uwaga na silny wiatr!`);
//   }
// }
