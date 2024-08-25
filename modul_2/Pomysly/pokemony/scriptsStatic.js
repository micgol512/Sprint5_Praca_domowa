// function transformPokemonTable() {
//   const tables = Array.from(document.querySelectorAll("table"));
//   // const table = document.getElementById("tabela");
//   // const rows = table.querySelectorAll("tbody tr");
//   const pokemonData = [];
//   tables.forEach((rejon) => {
//     const rows = rejon.querySelectorAll("tbody tr");
//     // console.log("ROWS: ", rows);
//     rows.forEach((row) => {
//       const cells = row.querySelectorAll("td");
//       const id = cells[0].textContent.trim();
//       const pokemonImage = cells[1].querySelector("img").src;
//       const name = cells[2].querySelector("a").textContent.trim();
//       const types = setType(Array.from(cells[3].querySelectorAll("img")));
//       const wystepowanie = cells[6].textContent.trim();
//       let ewolucja = cells[7];
//       if (ewolucja.innerText === "Brak") {
//         ewolucja = "BRAK";
//       } else if (ewolucja.innerText === "EWO") {
//         ewolucja = "EWO";
//       } else {
//         // ewolucja.innerHTML.lastIndexOf(">");
//         ewolucja = ewolucja.innerText.split(" ");
//         // console.log(ewolucja);
//         // const regex = /<a[^>]*>([^<]*)<\/a>/;
//         // const match = ewolucja.match(regex);
//         // const text = match ? match[1].trim() : null;
//         // ewolucja = text;
//         // console.log("NORMALNA", ewolucja.innerHTML);
//         if (ewolucja.length < 61) {
//           ewolucja = ewolucja[ewolucja.length - 11];
//           console.log("Typ ewolucji w warunku: ", typeof ewolucja);
//           if (typeof ewolucja === "undefined") {
//             ewolucja = "Brak";
//           }
//           if (typeof ewolucja === "string" && ewolucja.includes("Ewolucji")) {
//             ewolucja = "Kamień Mega Ewolucji";
//           }
//           if (ewolucja.includes("\n")) {
//             console.log("Zawiera znaki specjakne");
//           }
//         } else {
//           ewolucja = ewolucja.join(" ");
//         }
//       }
//       // console.log(ewolucja);

//       if (!name.includes("Mega")) {
//         pokemonData.push({
//           id,
//           name,
//           type: types,
//           wystepowanie,
//           ewolucja,
//           rejon: `${rejon.id[0].toUpperCase()}${rejon.id.slice(1)}`,
//           img: pokemonImage,
//         });
//       }
//     });
//   });
//   // saveDataToFile(pokemonData, "pokemonData.js");
//   return pokemonData;
// }
// function extractNumberFromLink(url) {
//   const regex = /\/typy\/(\d+)\.png$/;
//   const match = url.match(regex);
//   return match ? match[1] : null;
// }
// function setType(arrayImg) {
//   const types = [];
//   arrayImg.forEach(({ src }) => {
//     const number = extractNumberFromLink(src);
//     switch (number) {
//       case "1":
//         types.push("Normalny");
//         break;
//       case "2":
//         types.push("Ognisty");
//         break;
//       case "3":
//         types.push("Wodny");
//         break;
//       case "4":
//         types.push("Trawiasty");
//         break;
//       case "5":
//         types.push("Elektryczny");
//         break;
//       case "6":
//         types.push("Powietrzny");
//         break;
//       case "7":
//         types.push("Psychiczny");
//         break;
//       case "8":
//         types.push("Trujący");
//         break;
//       case "9":
//         types.push("Duch");
//         break;
//       case "10":
//         types.push("Walczący");
//         break;
//       case "11":
//         types.push("Stalowy");
//         break;
//       case "12":
//         types.push("Ziemny");
//         break;
//       case "13":
//         types.push("Kamienny");
//         break;
//       case "14":
//         types.push("Lodowy");
//         break;
//       case "15":
//         types.push("Mroczny");
//         break;
//       case "16":
//         types.push("Robaczy");
//         break;
//       case "17":
//         types.push("Smoczy");
//         break;
//       case "18":
//         types.push("Wróżka");
//         break;

//       default:
//         // types.push("Undefined");
//         break;
//     }
//   });
//   return types;
// }
// function saveDataToFile(data, filename) {
//   const jsContent = `const pokemonData = ${JSON.stringify(data, null, 2)};`;

//   const blob = new Blob([jsContent], { type: "application/javascript" });
//   const link = document.createElement("a");
//   link.href = URL.createObjectURL(blob);
//   link.download = filename;

//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }

// // Przykład użycia:
// // const transformedData = transformPokemonTable();
// // console.log(transformedData);
