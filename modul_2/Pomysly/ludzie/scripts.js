import { data } from "./data.js";
// let fakePpl = {};
// fetch("fakePpl.csv")
//   .then((response) => response.text())
//   .then((csvText) => {
//     const rows = csvText.split("\n"); // Podziel na wiersze
//     const headers = rows[0].split(","); // Podziel nagłówki
//     const data = rows.slice(1).map((row) => {
//       const values = row.split(",");
//       return headers.reduce((object, header, index) => {
//         object[header] = values[index];
//         return object;
//       }, {});
//     });
//     // fakePpl = data;
//     // console.log(data); // Przetworzone dane
//     // saveDataToFile(data, "data.js");
//   })
//   .catch((error) => console.error("Błąd podczas pobierania pliku:", error));
// //"fakePpl.js")
// function saveDataToFile(data, filename) {
//   const jsContent = `const data = ${JSON.stringify(data, null, 2)};`;

//   const blob = new Blob([jsContent], { type: "application/javascript" });
//   const link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = filename;

//   document.body.appendChild(link);
//   link.click();

//   document.body.removeChild(link);
// }
// console.log(data);

const content = document.getElementById("content");

// content.innerHTML = `${data[0].GivenName} ${data[0].Surname} `;
// content.innerHTML = `<ul>`;
data.forEach(
  ({
    Number,
    Gender,
    Title,
    GivenName,
    Surname,
    StreetAddress,
    City,
    ZipCode,
    EmailAddress,
  }) => {
    content.innerHTML += `<li> ${Title} ${GivenName} ${Surname} zamieszkał${
      Gender === "male" ? "y" : "a"
    }:  ul. ${StreetAddress} ${ZipCode} ${City}</li>`;
  }
);
// content.innerHTML += `</ul>`;
// {
//     "Number": "1",
//     "Gender": "male",
//     "NameSet": "Polish",
//     "Title": "Mr.",
//     "GivenName": "Tadzio",
//     "MiddleInitial": "B",
//     "Surname": "Olszewski",
//     "StreetAddress": "\"ul. Drwali 61\"",
//     "City": "Szczecin",
//     "State": "",
//     "StateFull": "",
//     "ZipCode": "70-872",
//     "Country": "PL",
//     "CountryFull": "Poland",
//     "EmailAddress": "TadzioOlszewski@armyspy.com",
//     "Username": "Intion",
//     "Password": "ahQui5th",
//     "BrowserUserAgent": "\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML",
//     "TelephoneNumber": " like Gecko) Chrome/74.0.3729.131 Safari/537.36\"",
//     "TelephoneCountryCode": "\"79 949 15 67\"",
//     "MothersMaiden": "48",
//     "Birthday": "Pawłowska",
//     "Age": "3/17/1960",
//     "TropicalZodiac": "64",
//     "CCType": "Pisces",
//     "CCNumber": "MasterCard",
//     "CVV2": "5326310501501646",
//     "CCExpires": "880",
//     "NationalID": "2/2027",
//     "UPS": "60031781857",
//     "WesternUnionMTCN": "\"1Z 738 843 20 4254 109 1\"",
//     "MoneyGramMTCN": "9044186963",
//     "Color": "23026047",
//     "Occupation": "Blue",
//     "Company": "Translator",
//     "Vehicle": "\"Kelly and Cohen\"",
//     "Domain": "\"2004 Chevrolet Blazer\"",
//     "BloodType": "BankingBets.pl",
//     "Pounds": "AB+",
//     "Kilograms": "234.3",
//     "FeetInches": "106.5",
//     "Centimeters": "\"5' 8\"\"\"",
//     "GUID": "173",
//     "Latitude": "aebbc291-f783-4d5a-8920-29373fbb704b",
//     "Longitude": "53.507696"
//   },
