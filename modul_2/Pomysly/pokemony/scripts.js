import { pokemonData } from "./pokemonData.js";

const body = document.querySelector("body");
const table = document.createElement("table");
const thead = Object.keys(pokemonData[0]);
const tbody = document.createElement("tbody");

table.innerHTML = `<thead><tr>
<th>${thead[0]}</th>
<th>${thead[1]}</th>
<th>${thead[6]}</th>
<th>${thead[2]}</th>
<th>${thead[3]}</th>
<th>${thead[4]}</th>
<th>${thead[5]}</th>
</tr></thead>`;
table.append(tbody);
pokemonData.forEach((pokemon) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${pokemon.id}</td>
<td>${pokemon.name}</td>
<td><img src="${pokemon.img}" alt="${pokemon.name}"></td>
<td>${pokemon.type}</td>
<td>${pokemon.wystepowanie}</td>
<td>${pokemon.ewolucja}</td>
<td>${pokemon.rejon}</td>`;
  tbody.append(row);
});
// table.innerHTML += `</tbody>`;

body.append(table);
