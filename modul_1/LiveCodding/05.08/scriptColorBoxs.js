const colors = [
  "black",
  "white",
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "aqua",
  "grey",
  "darkred",
  "lime",
  "orange",
  "pink",
];

colors.forEach((element, index) => {
  const btn = document.createElement("button");
  btn.style.backgroundColor = element;
  document.getElementById("btns-wrapper").append(btn);
  btn.setAttribute("id", `id-${index + 1}`);
  btn.addEventListener("click", () => {
    handleButton(element);
  });
});
function handleButton(color) {
  const $p = document.querySelector("p");
  const $select = document.getElementById("styleIt");
  if ($select.value === "background") {
    $p.style.backgroundColor = color;
  } else if ($select.value === "text") {
    $p.style.color = color;
  }
}
