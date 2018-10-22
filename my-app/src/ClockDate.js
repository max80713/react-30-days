import React from 'react';
import { Context } from './App';
import PropTypes from 'prop-types';

class ClockDate extends React.PureComponent {
  static propTypes = {
    year: PropTypes.string.isRequired,
    month: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
    render: PropTypes.func.isRequired,
  }

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