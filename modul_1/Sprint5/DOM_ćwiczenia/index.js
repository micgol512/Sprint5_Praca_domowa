const cars = [
  {
    name: "1990 Acura NSX",
    horsepower: 270,
    topSpeed: "168 mph",
  },
  {
    name: "1991 BMW M3 E30",
    horsepower: 215,
    topSpeed: "146 mph",
  },
  {
    name: "1994 Ferrari F355",
    horsepower: 375,
    topSpeed: "183 mph",
  },
  {
    name: "1995 McLaren F1",
    horsepower: 627,
    topSpeed: "240 mph",
  },
  {
    name: "1992 Dodge Viper RT/10",
    horsepower: 400,
    topSpeed: "165 mph",
  },
  {
    name: "1997 Porsche 911 Turbo (993)",
    horsepower: 408,
    topSpeed: "180 mph",
  },
];

let shownCars = cars;

const parent = document.querySelector("ul");

function removeElements() {
  const listElements = parent.childNodes;

  const elementsArray = Array.from(listElements);

  elementsArray.forEach((listElement) => listElement.remove());
}

const addElements = (array) => {
  removeElements();
  array.forEach((car) => {
    const li = document.createElement("li");
    li.className = "sports-car";
    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const h2 = document.createElement("h2");
    h2.innerText = car.name;
    cardContent.append(h2);

    const div = document.createElement("div");
    div.className = "statistics";

    const p1 = document.createElement("p");
    p1.innerText = `Horsepower: ${car.horsepower}`;
    p1.className = "horsepower";
    div.append(p1);

    const p2 = document.createElement("p");
    p2.innerText = `Top Speed: ${car.topSpeed}`;
    p2.className = "top-speed";
    div.append(p2);

    cardContent.append(div);
    li.append(cardContent);

    const actionButton = document.createElement("button");
    actionButton.className = "btn";
    actionButton.innerText = "Enter";
    li.append(actionButton);

    parent.append(li);
  });
  const listElements = parent.childNodes;

  const elementsArray = Array.from(listElements);

  const power = elementsArray.reduce((accumulator, currentValue) => {
    // Zamieniamy string na tablicę
    const lines = currentValue.innerText.split("\n");
    // Znajdujemy element posiadający fraze horsepower
    const horsepowerLine = lines.find((line) => line.includes("Horsepower"));
    // Wyciągnięcie z linii informacji o mocy za pomocą wyrażenia regularnego
    const horsepower = horsepowerLine.match(/\d+/)[0];
    return accumulator + Number(horsepower);
  }, 0);

  const powerDiv = document.querySelector(".power");
  powerDiv.innerText = `Łączna moc: ${power} hp`;
};

addElements(shownCars.slice(0, 3));

const fetchButton = document.querySelector(".secondary-btn");
fetchButton.addEventListener("click", (event) => {
  event.stopPropagation();
  addElements(shownCars, event);
});

const container = document.querySelector(".container");

function changeBackGroundColor() {
  if (container.style.backgroundColor === "aliceblue") {
    container.style.backgroundColor = "";
  } else {
    container.style.backgroundColor = "aliceblue";
  }
}

container.addEventListener("click", changeBackGroundColor);

//Stylowanie pojedyńczego elementu
const header = document.querySelector(".title");
header.style.fontSize = "48px";
header.style.color = "burlywood";
header.style["text-decoration"] = "underline";

//Stylowanie wielu elementów
document.querySelectorAll(".sports-car").forEach((element) => {
  Object.assign(element.style, {
    borderColor: "burlywood",
    borderWidth: "2px",
  });
});

let isFilter = false;
const filterButton = document.querySelector(".cars-filter");

function carsFilter(event) {
  event.stopPropagation();
  isFilter = !isFilter;
  if (isFilter) {
    shownCars = cars.filter((car) => car.horsepower >= 350);
    addElements(shownCars.slice(0, 3));
    filterButton.innerText = "Wszystkie auta";
  }
  if (!isFilter) {
    shownCars = cars;
    addElements(shownCars.slice(0, 3));
    filterButton.innerText = "Tylko super auta";
  }
}

filterButton.onclick = carsFilter;
