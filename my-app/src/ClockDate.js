import React from 'react';
import { Context } from './App';

class ClockDate extends React.PureComponent {
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    const { year, month, date } = this.props;

    return (
      <Context.Consumer>
        {value => (
          <div style={{ color: value }}>
            {this.props.render(year, month, date)}
          </div>
        )}
      </Context.Consumer>
    );
  }
}

export default ClockDate;