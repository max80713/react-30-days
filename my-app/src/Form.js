import React from 'react';

class Form extends React.Component {
  inputRef = React.createRef()

  handleSubmit = event => {
    event.preventDefault();

    const value = this.inputRef.current.value;
    window.alert(value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.inputRef} />
        <input type="submit" value="送出" />
      </form>
    )
  }
}

export default Form;