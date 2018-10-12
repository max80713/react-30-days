import React from 'react';

class Form extends React.Component {
  state = {
    inputValue: 'example'
  }

  handleInputChange = event => {
    const value = event.target.value;

    this.setState({
      inputValue: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    window.alert(this.state.inputValue);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
        <input type="submit" value="送出" />
      </form>
    )
  }
}

export default Form;