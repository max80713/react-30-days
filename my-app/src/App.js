import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './Example';
import ExampleClassComponet from './ExampleClassComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ExampleClassComponet text={'React'} />
          <ExampleClassComponet text={'Component'} />
          <ExampleClassComponet text={'props'} />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            I like to learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
