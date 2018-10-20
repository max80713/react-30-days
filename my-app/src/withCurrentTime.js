import React from 'react';

function withCurrentTime(WrappedComponent) {
  return class extends React.Component {
    state = {
      currentTime: new Date(),
    }

    componentDidMount() {
      this.interval = setInterval(() => {
        this.setState({
          currentTime: new Date()
        });
      }, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render() {
      return <WrappedComponent currentTime={this.state.currentTime}/>;
    }
  }
}

export default withCurrentTime;