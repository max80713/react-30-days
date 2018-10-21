import React from 'react';
import ClockDate from './ClockDate';
import withCurrentTime from './withCurrentTime';

class Clock extends React.Component {
  timeRef = React.createRef()

  componentDidUpdate() {
    if (this.props.currentTime.getSeconds() % 5 === 0) {
      this.timeRef.current.style.color = 'red';
    } else {
      this.timeRef.current.style.color = 'black';
    }
  }

  render() {
    const { currentTime } = this.props;

    return (
      <div>
        <ClockDate year={currentTime.getFullYear()} month={currentTime.getMonth() + 1} date={currentTime.getDate()} render={(year, month, date) => {
          return `${year}年${month}月${date}日`;
        }}/>
        <ClockDate year={currentTime.getFullYear()} month={currentTime.getMonth() + 1} date={currentTime.getDate()} render={(year, month, date) => {
          return `${year}/${month}/${date}`;
        }}/>
        <ClockDate year={currentTime.getFullYear()} month={currentTime.getMonth() + 1} date={currentTime.getDate()} render={(year, month, date) => {
          return `${year}-${month}-${date}`;
        }}/>
        <div ref={this.timeRef}>{currentTime.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default withCurrentTime(Clock);