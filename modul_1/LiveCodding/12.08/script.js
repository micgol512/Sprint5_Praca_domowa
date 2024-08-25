const questions = [
  { question: "Słońce jest gwiazdą.", answer: true },
  { question: "Londyn jest stolicą Francji.", answer: false },
  { question: "Python to język programowania.", answer: true },
  {
    question: "Woda wrze w temperaturze 100°C na poziomie morza.",
    answer: true,
  },
  { question: "2 + 2 = 5.", answer: false },
  { question: "Czas jest mierzony w litrach.", answer: false },
  { question: "Największym kontynentem na świecie jest Azja.", answer: true },
  { question: "HTML to język programowania.", answer: false },
  { question: "Rekiny to ssaki.", answer: false },
  { question: "Liczba Pi wynosi około 3.14159.", answer: true },
];
const questionContainer = document.getElementById("question-container");
const startButton = document.getElementById("start-quiz");
const buttonContainer = document.getElementById("buttons-container");

let questionNumber = 0;
let result = 0;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.remove();
  const trueButton = document.createElement("button");
  const falseButton = document.createElement("button");
  trueButton.innerHTML = "Prawda";
  falseButton.innerHTML = "Fałsz";
  trueButton.addEventListener("click", () => handleAnswer(true));
  falseButton.addEventListener("click", () => handleAnswer(false));
  buttonContainer.append(trueButton, falseButton);
  loadQuestions();
}
function loadQuestions() {
  const question = questions[questionNumber].question;
  questionContainer.innerHTML = question;
}
function handleAnswer(answer) {
  const correctAnswer = questions[questionNumber].answer;
  if (answer === correctAnswer) {
    result++;
  }
  if (++questionNumber > questions.length - 1) {
    buttonContainer.innerHTML = "";
    showResult();
    return;
  }
  loadQuestions();
}
function showResult() {
  questionContainer.innerText = `"Koniec quizu!"
     "Twój wyniki ${result}/${questions.length}"`;
  const playAgainBtn = document.createElement("button");
  playAgainBtn.innerText = "Zagraj ponowinie";
  buttonContainer.append(playAgainBtn);
  playAgainBtn.addEventListener("click", restartQuiz);
}
function restartQuiz() {
  buttonContainer.innerHTML = "";
  questionNumber = 0;
  result = 0;
  startQuiz();
}
