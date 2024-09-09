import { useState } from "react";
import QUESTIONS from "./quizQuestions";
import "./App.css";

function App() {
  const [question, setQuestion] = useState(-1);
  const [score, setScore] = useState(0);

  const nextQuestion = (answer) => {
    if (question !== -1 && answer === findCorrectAnswerIndex(QUESTIONS[question])) {
      setScore(score + 1);
    }
    setQuestion(question + 1);
  };
  const resetQuiz = () => {
    setQuestion(-1);
    setScore(0);
  };
  const findCorrectAnswerIndex = (question) => {
    return question.answers.findIndex((answer) => answer.isCorrect);
  };

  return (
    <>
      <h1>QUIZ</h1>
      {question === -1 ? (
        <>
          <h2>Sprawdź swoją wiedzę o programowaniu</h2>
          <button onClick={() => nextQuestion(-1)}>Start QUIZ!!!</button>
        </>
      ) : question !== QUESTIONS.length ? (
        <>
          <h3>Pytanie nr {question + 1}</h3>
          <h2>{QUESTIONS[question].text}</h2>
          <div id="answers">
            <button onClick={() => nextQuestion(0)}>
              {QUESTIONS[question].answers[0].text}
            </button>
            <button onClick={() => nextQuestion(1)}>
              {QUESTIONS[question].answers[1].text}
            </button>
            <button onClick={() => nextQuestion(2)}>
              {QUESTIONS[question].answers[2].text}
            </button>
            <button onClick={() => nextQuestion(3)}>
              {QUESTIONS[question].answers[3].text}
            </button>
          </div>
          <button onClick={resetQuiz}>Reset QUIZ</button>
        </>
      ) : score >= 7 ? (
        <>
          <h2 id={"passed"}>
            Gratulacje!!! Świety wynik: {Math.ceil((score / QUESTIONS.length) * 100)}%
          </h2>
          <button onClick={resetQuiz}>Reset QUIZ</button>
        </>
      ) : (
        <>
          <h2 id={"failed"}>
            Niestety, QUIZ niezalizony. Wynik:{" "}
            {Math.ceil((score / QUESTIONS.length) * 100)}% jest za słaby :(
          </h2>
          <button onClick={resetQuiz}>Reset QUIZ</button>
        </>
      )}
    </>
  );
}

export default App;
