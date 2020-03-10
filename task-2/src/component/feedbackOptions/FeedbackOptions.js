import React from "react";

const FeedbackOptions = ({ feedbackOptions }) => {
  return (
    <>
      <button onClick={feedbackOptions} name="good" type="button">
        Good
      </button>
      <button onClick={feedbackOptions} name="neutral" type="button">
        Neutral
      </button>
      <button onClick={feedbackOptions} name="bad" type="button">
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;
