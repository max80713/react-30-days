import React from 'react';

class Clock extends React.Component {
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

  render() {
    return <div>{this.state.time.toLocaleTimeString()}</div>
  }
}

export default Clock;