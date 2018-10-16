import React from 'react';
import ClockDate from './ClockDate';

class Clock extends React.Component {
  timeRef = React.createRef()

  state = {
    time: new Date()
  }
  
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        time: new Date()
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    if (this.state.time.getSeconds() % 5 === 0) {
      this.timeRef.current.style.color = 'red';
    } else {
      this.timeRef.current.style.color = 'black';
    }
  }

  render() {
    return (
      <div>
        <ClockDate dateString={this.state.time.toLocaleDateString()} />
        <div ref={this.timeRef}>{this.state.time.toLocaleTimeString()}</div>
      </div>
    );
  }
}

export default Clock;