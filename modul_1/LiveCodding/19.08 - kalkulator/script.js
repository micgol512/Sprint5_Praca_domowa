const buttons = [
  { value: "7", action: "number" },
  { value: "8", action: "number" },
  { value: "9", action: "number" },
  { value: "/", action: "operator" },
  { value: "4", action: "number" },
  { value: "5", action: "number" },
  { value: "6", action: "number" },
  { value: "*", action: "operator" },
  { value: "1", action: "number" },
  { value: "2", action: "number" },
  { value: "3", action: "number" },
  { value: "-", action: "operator" },
  { value: "0", action: "number" },
  { value: ".", action: "decimal" },
  { value: "=", action: "calculate" },
  { value: "+", action: "operator" },
  { value: "C", action: "clear" },
];

const display = document.getElementById("display");

let accValue = "";
let tempResult = "";
let operator = "";

buttons.forEach(({ value, action }) => {
  const newBtn = document.createElement("button");
  newBtn.innerHTML = value;
  newBtn.value = value;
  newBtn.className = action;
  document.getElementById("buttons").append(newBtn);
  newBtn.addEventListener("click", handleButton);
});

function handleButton() {
  const value = this.value;
  const action = this.className;
  // if (action === "number") {
  //   if (display.innerText === "0") {
  //     display.innerText = value;
  //   } else {
  //     display.innerText += value;
  //   }
  //   accValue = display.innerText;
  //   console.log(accValue);
  // }
  pokazDane();
  switch (action) {
    case "number":
      accValue = `${accValue}${value}`;
      display.innerText = accValue;

      // if (display.innerText === "0") {
      //   display.innerText = value;
      // } else {
      //   if (accValue === "") display.innerText = "";
      //   display.innerText += value;
      // }
      // accValue = display.innerText;
      break;

    case "operator":
      operator = value;

      if (accValue !== "") {
        if (tempResult !== "") {
          tempResult = calculate();
          console.log({ tempResult });
        } else {
          tempResult = accValue;
        }
      }
      accValue = "";
      // if (tempResult === "") {
      //   tempResult = accValue;
      // } else {
      //   tempResult = calculate();
      //   console.log("temp: ", tempResult);
      // }
      // accValue = "";
      break;

    case "decimal":
      if (display.innerText.includes(".")) {
      } else {
        if (accValue === "") {
          accValue = "0";
        }
        accValue = `${accValue}.`;
        display.innerText = accValue;
      }
      break;
    case "calculate":
      if (tempResult && accValue) {
        display.innerText = calculate();
      }
      break;
    case "clear":
      clear();
      break;
    default:
      break;
  }
  pokazDane();
  // console.log(`Wartość: '${value}' daje akcje: ${action}`);
}

function calculate() {
  const parsedAccValue = parseFloat(display.innerText);
  const parsedTempResult = parseFloat(tempResult);
  let result = "";
  switch (operator) {
    case "+":
      result = parsedTempResult + parsedAccValue;
      break;
    case "-":
      result = parsedTempResult - parsedAccValue;
      break;
    case "*":
      result = parsedTempResult * parsedAccValue;
      break;
    case "/":
      result = parsedTempResult / parsedAccValue;
      break;
    default:
      result = display.innerText;
      break;
  }
  console.log(
    `"Obliczam: ${parsedAccValue} ${operator} ${parsedTempResult} = ${result}`
  );
  accValue = `${result}`;
  // operator = "";
  return result.toString();
}
function clear() {
  display.innerText = "0";
  accValue = "";
  operator = "";
  tempResult = "";
}

// Zadanie 9:
// Przetestuj działanie kalkulatora. Jeżeli występują sytuacje, w których kalkulator nie działa zgodnie z oczekiwaniami, popraw błędy i rozwiąż te problemy.
function pokazDane() {
  console.log(
    `AccValue: > ${accValue} < ->TempResult: > ${tempResult} < ->Operator: > ${operator} <`
  );
}
