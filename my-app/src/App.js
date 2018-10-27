import React, { Component } from 'react';
import './App.css';
import ClockWithSwitchWithStore from './ClockWithSwitchWithStore';
import Select from './Select';

const options = [{
  value: 'red',
  text: '紅色',
}, {
  value: 'green',
  text: '綠色',
}, {
  value: 'blue',
  text: '藍色',
}];

export const Context = React.createContext();

class App extends Component {
  state = {
    selectedValue: 'red'
  }

  handleChange = e => {
    const selectedValue = e.target.value;

    this.setState({
      selectedValue,
    })
  }

  render() {
    return (
      <div>
        <Select
          handleChange={this.handleChange}
          options={options}
          selectedValue={this.state.selectedValue}
        />
        <Context.Provider value={this.state.selectedValue}>
          <ClockWithSwitchWithStore/>
        </Context.Provider>
      </div>
    );
  }
}

export default App;
