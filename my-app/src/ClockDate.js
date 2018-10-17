import React from 'react';

class ClockDate extends React.PureComponent {
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    const { year, month, date } = this.props;

    return `${year}年${month}月${date}日`;
  }
}

export default ClockDate;