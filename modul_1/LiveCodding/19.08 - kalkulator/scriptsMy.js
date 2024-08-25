const btnsTab = Array.from(document.querySelectorAll("button"));
const resultInput = document.getElementById("result-input");

let result = 0;
let isClickedSpecial = false;
let tempNum = 0;
let char = "";
btnsTab.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    resultInput.removeAttribute("class");
    if (resultInput.value === "0") {
      resultInput.value = "";
    }
    switch (btn.value) {
      case "ac":
        resultInput.value = "0";
        result = 0;
        isClickedSpecial = false;
        break;
      case "c":
        resultInput.value.length > 1
          ? (resultInput.value = resultInput.value.slice(
              0,
              resultInput.value.length - 1
            ))
          : (resultInput.value = "0");
        break;
      case "/":
        isClickedSpecial = true;
        char = btn.value;
        break;
      case "*":
        isClickedSpecial = true;
        char = btn.value;
        break;
      case "-":
        isClickedSpecial = true;
        char = btn.value;
        break;
      case "+":
        isClickedSpecial = true;
        char = btn.value;
        break;
      case "=":
        switch (char) {
          case "/":
            result /= parseFloat(resultInput.value);
            break;
          case "*":
            result *= parseFloat(resultInput.value);
            break;
          case "-":
            result -= parseFloat(resultInput.value);
            break;
          case "+":
            result = parseFloat(result) + parseFloat(resultInput.value);
            break;
        }
        if (isNaN(result)) {
          resultInput.value = "0";
          resultInput.setAttribute("class", "error");
        } else {
          resultInput.value = result;
        }
        isClickedSpecial = true;
        char = "";
        result = 0;
        break;
      case ".":
        resultInput.value = `${resultInput.value}.0`;
        break;
      default:
        if (isClickedSpecial) {
          result = resultInput.value;
          resultInput.value = `${btn.value}`;
          isClickedSpecial = false;
        } else {
          resultInput.value += `${btn.value}`;
        }
        console.log(resultInput.value);
        break;
    }
  });
});
