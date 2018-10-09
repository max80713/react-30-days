import React from 'react';
import './Button.css';

class MyButton extends React.Component {
  handleClick = () => {
    window.alert(this.props.text);
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.props.text}</button>
    )
  }
}

export default MyButton;