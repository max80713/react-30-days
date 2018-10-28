import React from 'react';
import store from './redux/store';
import { toggleCheckbox } from './redux/actions';
import ClockWithSwitchWithStore from './ClockWithSwitchWithStore';

function ClockWithSwitchWithStoreContainer(WrappedComponent) {
  return class extends React.Component {
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
      return <WrappedComponent checked={this.state.checked} handleChange={this.handleChange} />
    }
  }
}

export default ClockWithSwitchWithStoreContainer(ClockWithSwitchWithStore);