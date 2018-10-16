import React from 'react';

class ClockDate extends React.Component {
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (prevProps.dateString === this.props.dateString) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return this.props.dateString;
  }
}

export default ClockDate;