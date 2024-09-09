import "../components/ResultForm.css";

const ResultForm = ({ arrQuestion = [], arrAnswers = [] }) => {
  let score = 0;
  const result = arrAnswers.map((answer, index) => {
    // console.log("Score nr:", index, "=>", arrQuestion[index].answers[answer].isCorrect);
    const isCorret = arrQuestion[index].answers[answer].isCorrect;
    isCorret ? score++ : null;
    return (
      <>
        <div>
          <span>
            Pytanie {index + 1}:<strong> {arrQuestion[index].text} </strong>
          </span>
          <span>
            <i>Twoja odpowiedz: </i>
            <strong className={isCorret ? "correct" : "failed"}>
              {arrQuestion[index].answers[answer].text}
            </strong>
          </span>
        </div>
      </>
    );
  });
  score = Math.ceil((score / arrAnswers.length) * 100);
  return (
    <>
      {score >= 80 ? (
        <>
          <h2 className={"correct"}>
            Gratulacje!!! QUIZ zaliczony!!! Twój wynik: {score}%.
          </h2>
        </>
      ) : (
        <>
          <h2 className={"failed"}>
            Niestety, QUIZ niezalizony. Wynik: {score}% to za mało :(
          </h2>
        </>
      )}

      <div id="final-form">{result}</div>
    </>
  );
};
export default ResultForm;
