import React, { Component } from "react";
import Statistic from "./component/statistic/Statistic";
import FeedbackOptions from "./component/feedbackOptions/FeedbackOptions";
import Notification from "./component/notification/Notification";
import css from "./component/statistic/statistic.module.css";
import Section from "./component/section/Section";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0
};
class App extends Component {
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
        <Section title="Please leave feedback">
          <FeedbackOptions feedbackOptions={this.onHandleClickButton} />
        </Section>
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="STATISTIC">
            <Statistic
              {...this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
