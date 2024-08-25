console.clear();
const userName = "michał";
const userAge = 30;
const likesJavaScript = true;
const userHobby = ["Programowanie", "Gry PC", "Karcianki i planszówki"];
const userCity = "Warszawa";

const formattedName = userName.charAt().toUpperCase() + userName.slice(1);
const olderAge = userAge + 10;
const isAdult = userAge >= 18;
const isWarsawCitizen = userCity.toLowerCase().includes("warszawa");
const likesJSAndIsAdult = likesJavaScript && isAdult;

console.log(
  `Cześć ${formattedName}, widzę, że masz ${userAge} ${
    userAge % 10 == 2 || userAge % 10 == 3 || userAge % 10 == 4 ? "lata" : "lat"
  } to znaczy, że ${isAdult ? "" : "nie "}jesteś pełnoletni${
    userName.slice(-1) !== "a" ? "" : "a"
  }. ${likesJavaScript ? "Rewelacja, że też lubisz JavaScript." : ""} ${
    isWarsawCitizen
      ? "Mieszkasz w Warszawie a stolica daje wiele możliwości."
      : ""
  } Lubisz ${userHobby.toString()} :)`
);
