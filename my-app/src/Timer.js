import React from 'react';
import withCurrentTime from './withCurrentTime';

class Timer extends React.Component {
  state = {
    now: new Date(),
  }

  render() {
    const { now } = this.state;
    const { currentTime } = this.props;

    return (
      <div>{Math.floor((currentTime - now) / 1000)}秒</div>
    );
  }
}

export default withCurrentTime(Timer);