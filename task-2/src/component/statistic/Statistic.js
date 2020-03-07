import React, { Component } from "react";
import css from "./statistic.module.css";
// import ShowStatistic from '../showStatistics/ShowStatistics';
// import BlockButton from '../blockButton/BlockButton'

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0
};
class Statistic extends Component {
  state = {
    ...initialState
  };

  onHandleClickButton = event => {
    const name = event.target.name;
    this.setState({
      [name]: this.state[name] + 1
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good * 100) / this.countTotalFeedback());
  };

  render() {
    return (
    
        <div className={css.container}>
          <h1>Please leave feedback</h1>
          <button onClick={this.onHandleClickButton} name="good">
            Good
          </button>
          <button onClick={this.onHandleClickButton} name="neutral">
            Neutral
          </button>
          <button onClick={this.onHandleClickButton} name="bad">
            Bad
          </button>
          <h3>Statistics</h3>
          <p>Good:{this.state.good}</p>
          <p>Neutral:{this.state.neutral}</p>
          <p>Bad:{this.state.bad}</p>
          <h4>TOTAL: {this.countTotalFeedback()}</h4>
          <h4>Positive Feedback:{this.countPositiveFeedbackPercentage()} %</h4>
        </div>
      
    );
  }
}

export default Statistic;
