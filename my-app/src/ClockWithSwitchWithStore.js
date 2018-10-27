import React from 'react';
import Clock from './Clock';
import Timer from './Timer';
import store from './redux/store';
import { toggleCheckbox } from './redux/actions';

import ReactDOM from 'react-dom';

class ClockWithSwitchWithStore extends React.Component {
  unsubscribe = null

  state = {
    checked: store.getState().checkbox.checked,
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const state = store.getState();
      const checkbox = state.checkbox;
      const checked = checkbox.checked;

      this.setState({
        checked
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleChange = () => {
    const isChecked = this.state.checked;

    store.dispatch(toggleCheckbox(!isChecked));
  }

  render() {
    return (
      <div>
        <input type="checkbox" checked={this.state.checked} onChange={this.handleChange}/>
        {this.state.checked ? ReactDOM.createPortal(<Clock/>, document.getElementById('clock-root')) : null}
        {this.state.checked ? <Timer/> : null}
      </div>
    )
  }
}

export default ClockWithSwitchWithStore;