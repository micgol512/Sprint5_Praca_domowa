console.clear();
const number1 = 12;
const number2 = 3;
let result;
const operationType = "/"; // do wyboru: ["+", "-", "*", "/", "%"];
switch (operationType) {
  case "+":
    result = number1 + number2;
    break;
  case "-":
    result = number1 - number2;
    break;
  case "*":
    result = number1 * number2;
    break;
  case "/":
    number2 != 0
      ? (result = number1 / number2)
      : console.log(`Cholero nie dziel przez zero!!!`);
    break;
  case "%":
    number2 != 0
      ? (result = number1 % number2)
      : console.log(`Cholero nie dziel przez zero!!!`);
    break;
  default:
    console.log(`Nieznana operacja: "${operationType}" !!!`);
}
const isEven = result % 2 === 0;
!isNaN(result) &&
  isFinite(result) &&
  console.log(
    `Wynik operacji "${number1} ${operationType} ${number2}" to: ${
      result.toString().includes(".") ? "~ " + result.toFixed(2) : result
    }, który ${isEven ? "" : "nie "}jest parzysty.`
  );
