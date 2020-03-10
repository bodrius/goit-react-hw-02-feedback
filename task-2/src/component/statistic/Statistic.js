import React from "react";

const Statistic = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage
}) => {
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <h4>TOTAL: {countTotalFeedback()}</h4>
      <h4>POSITIVE FEEDBACK:{countPositiveFeedbackPercentage()} %</h4>
    </>
  );
};

export default Statistic;
