import React from 'react';

class Select extends React.Component {
  render() {
    return (
      <select onChange={this.props.handleChange}>
        {this.props.options.map(option => {
          return (
            <option
              value={option.value}
              checked={this.props.selectedValue === option.value}
              key={option.value}
            >{option.text}</option>
          )
        })}
      </select>
    )
  }
}

export default Select;