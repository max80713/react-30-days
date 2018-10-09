import React from 'react';
import './Button.css';

class MyButton extends React.Component {
  spanRef = React.createRef()

  handleClick = () => {
    const number = Number(this.spanRef.current.textContent);

    this.spanRef.current.textContent = number + 1;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.text}</button>
        <p>被點擊了<span ref={this.spanRef}>0</span>次</p>
      </div>
    )
  }
}

export default MyButton;