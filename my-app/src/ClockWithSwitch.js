import React from 'react';
import Clock from './Clock';

class ClockWithSwitch extends React.Component {
  state = {
    checked: false,
  }

  handleChange = () => {
    const isChecked = this.state.checked;

    this.setState({
      checked: !isChecked
    })
  }

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
        {this.state.checked ? <Clock/> : null}
      </div>
    )
  }
}

export default ClockWithSwitch;