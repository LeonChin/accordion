import React from "react";
import Question from "./Question";

function Questions({ questions, toggleQuestion, activeId }) {
  return (
    <section className="container">
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            toggleQuestion={toggleQuestion}
            activeId={activeId}
          />
        );
      })}
    </section>
  );
}

export default Questions;
