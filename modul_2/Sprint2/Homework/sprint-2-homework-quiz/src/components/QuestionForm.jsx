import QUESTIONS from "../quizQuestions";
const QuestionForm = (question, nextQuestion) => {
  return (
    <>
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
      </>
    </>
  );
};
export default QuestionForm;
{
  /* <>
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
</> */
}
