import React from 'react';
import './Button.css';

class MyButton extends React.Component {
  state = {
    clickTimes: 0
  }
  
  handleClick = () => {
    const oldClickTimes = this.state.clickTimes;

    this.setState({
      clickTimes: oldClickTimes + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.text}</button>
        <p>被點擊了<span>{this.state.clickTimes}</span>次</p>
      </div>
    )
  }
}

export default MyButton;