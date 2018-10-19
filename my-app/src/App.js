import React, { Component } from 'react';
import './App.css';
import ClockWithSwitch from './ClockWithSwitch';
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
        <ClockWithSwitch />
      </div>
    );
  }
}

export default App;
