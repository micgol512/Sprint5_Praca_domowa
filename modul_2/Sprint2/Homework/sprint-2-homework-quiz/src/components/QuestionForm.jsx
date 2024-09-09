const QuestionForm = ({ question, nextQuestion }) => {
  return (
    <>
      <h2>{question.text}</h2>
      <div id="answers">
        <button onClick={() => nextQuestion(0)}>{question.answers[0].text}</button>
        <button onClick={() => nextQuestion(1)}>{question.answers[1].text}</button>
        <button onClick={() => nextQuestion(2)}>{question.answers[2].text}</button>
        <button onClick={() => nextQuestion(3)}>{question.answers[3].text}</button>
      </div>
    </>
  );
};
export default QuestionForm;
