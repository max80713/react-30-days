import React from 'react';
import Clock from './Clock';
import Timer from './Timer';


import ReactDOM from 'react-dom';

class ClockWithSwitchWithStore extends React.Component {
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.checked} onChange={this.props.handleChange}/>
        {this.props.checked ? ReactDOM.createPortal(<Clock/>, document.getElementById('clock-root')) : null}
        {this.props.checked ? <Timer/> : null}
      </div>
    )
  }
}

export default ClockWithSwitchWithStore;