import React from 'react';

class ExampleClassComponent extends React.Component {
  render() {
    const props = this.props;

    return (
      <div>
        <h1>Hello!</h1>
        <h2>{props.text}</h2>
      </div>
    );
  }
}

export default ExampleClassComponent;