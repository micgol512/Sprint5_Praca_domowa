// const rowData = {
//   films: [
//     {
//       title: "A New Hope",
//       episode_id: 4,
//       opening_crawl:
//         "It is a period of civil war.\\r\\nRebel spaceships, striking\\r\\nfrom a hidden base, have won\\r\\ntheir first victory against\\r\\nthe evil Galactic Empire.\\r\\n\\r\\nDuring the battle, Rebel\\r\\nspies managed to steal secret\\r\\nplans to the Empire's\\r\\nultimate weapon, the DEATH\\r\\nSTAR, an armored space\\r\\nstation with enough power\\r\\nto destroy an entire planet.\\r\\n\\r\\nPursued by the Empire's\\r\\nsinister agents, Princess\\r\\nLeia races home aboard her\\r\\nstarship, custodian of the\\r\\nstolen plans that can save her\\r\\npeople and restore\\r\\nfreedom to the galaxy....",
//       director: "George Lucas",
//       producer: "Gary Kurtz, Rick McCallum",
//       release_date: "1977-05-25",
//       created: "2014-12-10T14:23:31.880000Z",
//       edited: "2014-12-20T19:49:45.256000Z",
//       url: "https://swapi.dev/api/films/1/",
//     },
//     {
//       title: "The Empire Strikes Back",
//       episode_id: 5,
//       opening_crawl:
//         "It is a dark time for the\\r\\nRebellion. Although the Death\\r\\nStar has been destroyed,\\r\\nImperial troops have driven the\\r\\nRebel forces from their hidden\\r\\nbase and pursued them across\\r\\nthe galaxy.\\r\\n\\r\\nEvading the dreaded Imperial\\r\\nStarfleet, a group of freedom\\r\\nfighters led by Luke Skywalker\\r\\nhas established a new secret\\r\\nbase on the remote ice world\\r\\nof Hoth.\\r\\n\\r\\nThe evil lord Darth Vader,\\r\\nobsessed with finding young\\r\\nSkywalker, has dispatched\\r\\nthousands of remote probes into\\r\\nthe far reaches of space....",
//       director: "Irvin Kershner",
//       producer: "Gary Kurtz, Rick McCallum",
//       release_date: "1980-05-17",
//       created: "2014-12-12T11:26:24.656000Z",
//       edited: "2014-12-15T13:07:53.386000Z",
//       url: "https://swapi.dev/api/films/2/",
//     },
//     {
//       title: "Return of the Jedi",
//       episode_id: 6,
//       opening_crawl:
//         "Luke Skywalker has returned to\\r\\nhis home planet of Tatooine in\\r\\nan attempt to rescue his\\r\\nfriend Han Solo from the\\r\\nclutches of the vile gangster\\r\\nJabba the Hutt.\\r\\n\\r\\nLittle does Luke know that the\\r\\nGALACTIC EMPIRE has secretly\\r\\nbegun construction on a new\\r\\narmored space station even\\r\\nmore powerful than the first\\r\\ndreaded Death Star.\\r\\n\\r\\nWhen completed, this ultimate\\r\\nweapon will spell certain doom\\r\\nfor the small band of rebels\\r\\nstruggling to restore freedom\\r\\nto the galaxy...",
//       director: "Richard Marquand",
//       producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
//       release_date: "1983-05-25",
//       created: "2014-12-18T10:39:33.255000Z",
//       edited: "2014-12-20T09:48:37.462000Z",
//       url: "https://swapi.dev/api/films/3/",
//     },
//     {
//       title: "The Phantom Menace",
//       episode_id: 1,
//       opening_crawl:
//         "Turmoil has engulfed the\\r\\nGalactic Republic. The taxation\\r\\nof trade routes to outlying star\\r\\nsystems is in dispute.\\r\\n\\r\\nHoping to resolve the matter\\r\\nwith a blockade of deadly\\r\\nbattleships, the greedy Trade\\r\\nFederation has stopped all\\r\\nshipping to the small planet\\r\\nof Naboo.\\r\\n\\r\\nWhile the Congress of the\\r\\nRepublic endlessly debates\\r\\nthis alarming chain of events,\\r\\nthe Supreme Chancellor has\\r\\nsecretly dispatched two Jedi\\r\\nKnights, the guardians of\\r\\npeace and justice in the\\r\\ngalaxy, to settle the conflict....",
//       director: "George Lucas",
//       producer: "Rick McCallum",
//       release_date: "1999-05-19",
//       created: "2014-12-19T16:52:55.740000Z",
//       edited: "2014-12-20T10:54:07.216000Z",
//       url: "https://swapi.dev/api/films/4/",
//     },
//     {
//       title: "Attack of the Clones",
//       episode_id: 2,
//       opening_crawl:
//         "There is unrest in the Galactic\\r\\nSenate. Several thousand solar\\r\\nsystems have declared their\\r\\nintentions to leave the Republic.\\r\\n\\r\\nThis separatist movement,\\r\\nunder the leadership of the\\r\\nmysterious Count Dooku, has\\r\\nmade it difficult for the limited\\r\\nnumber of Jedi Knights to maintain \\r\\npeace and order in the galaxy.\\r\\n\\r\\nSenator Amidala, the former\\r\\nQueen of Naboo, is returning\\r\\nto the Galactic Senate to vote\\r\\non the critical issue of creating\\r\\nan ARMY OF THE REPUBLIC\\r\\nto assist the overwhelmed\\r\\nJedi....",
//       director: "George Lucas",
//       producer: "Rick McCallum",
//       release_date: "2002-05-16",
//       created: "2014-12-20T10:57:57.886000Z",
//       edited: "2014-12-20T20:18:48.516000Z",
//       url: "https://swapi.dev/api/films/5/",
//     },
//     {
//       title: "Revenge of the Sith",
//       episode_id: 3,
//       opening_crawl:
//         "War! The Republic is crumbling\\r\\nunder attacks by the ruthless\\r\\nSith Lord, Count Dooku.\\r\\nThere are heroes on both sides.\\r\\nEvil is everywhere.\\r\\n\\r\\nIn a stunning move, the\\r\\nfiendish droid leader, General\\r\\nGrievous, has swept into the\\r\\nRepublic capital and kidnapped\\r\\nChancellor Palpatine, leader of\\r\\nthe Galactic Senate.\\r\\n\\r\\nAs the Separatist Droid Army\\r\\nattempts to flee the besieged\\r\\ncapital with their valuable\\r\\nhostage, two Jedi Knights lead a\\r\\ndesperate mission to rescue the\\r\\ncaptive Chancellor....",
//       director: "George Lucas",
//       producer: "Rick McCallum",
//       release_date: "2005-05-19",
//       created: "2014-12-20T18:49:38.403000Z",
//       edited: "2014-12-20T20:47:52.073000Z",
//       url: "https://swapi.dev/api/films/6/",
//     },
//   ],
// };
// function createActions(parent, index) {
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "✘";
//   deleteBtn.setAttribute("class", "deleteBtn");
//   const $td = document.createElement("td");
//   $td.setAttribute("class", "content-buttons");
//   $td.append(deleteBtn);
//   parent.append($td);
//   ///////////////////////////////////////////////////////////////////////////////////////
//   deleteBtn.addEventListener("click", () => {
//     console.log(`Kliknieto ${index} button: ${parent}`);
//     parent.remove();
//   });
//   ///////////////////////////////////////////////////////////////////////////////////////
//   // const delBtnTab = Array.from(document.querySelectorAll(".deleteBtn"));
//   // delBtnTab.forEach((btn, index) => {
//   //   btn.addEventListener("click", () => {
//   //     document.getElementById(`row-${index}`).remove();
//   //   });
//   // });
//   ///////////////////////////////////////////////////////////////////////////////////////
// }
// function createData(activeBtn) {
//   if (document.getElementById("nothing-to-show"))
//     document.getElementById("nothing-to-show").remove();
//   const thead = document.getElementById("table-head");
//   thead.innerHTML = `<tr>
//       <th>ID</th>
//       <th>Pierwsze pole</th>
//       <th>Drugie pole</th>
//       <th>Trzecie pole</th>
//       <th>CREATED</th>
//       <th>ACTIONS</th>
//     </tr>`;
//   const tbody = document.getElementById("table-body");
//   const content = Array.from(rowData[activeBtn]);
//   content.forEach((element, index) => {
//     tbody.innerHTML += `<tr id="row-${index}">
//           <td>${index + 1}.</td>
//           <td>${element.title}</td>
//           <td>${element.director}</td>
//           <td>${element.producer}</td>
//           <td>${element.created}</td>
//         </tr>`;
//     // console.log(document.getElementById(`row-${index}`));
//     createActions(document.getElementById(`row-${index}`), index);
//   });
// }
// document.getElementById("sprawdzaj").addEventListener("click", () => {
//   createData("films");
// });
// import { imagesData } from "./data.js";
// imagesData.forEach((image, index) => {
//   const $img = document.createElement("img");
//   $img.src = `${image}`;
//   $img.alt = `Obrazek nr ${index}`;
//   $img.style.maxWidth = `100px`;
//   document.getElementById("images-wrapper").append($img);
// });

const scaleSlider = document.getElementById("scale-slider");
scaleSlider.addEventListener("input", () => {
  const changeDiv = document.getElementById("div-for-change");
  const scale = parseFloat(scaleSlider.value);
  changeDiv.style.width = `${50 * scale}px`;
  changeDiv.style.height = `${50 * scale}px`;
  changeDiv.innerText = scaleSlider.value;
  // console.log("width:", changeDiv.style.width);
  // console.log("height:", changeDiv.style.height);
  // const translate = 50 * (scale - 1);
  // changeDiv.style.transform = `translate(${translate}px, ${translate}px) scale(${scale})`;

  // console.log(parseFloat(scaleSlider.value));
});
