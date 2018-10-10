import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButtonUsingState from './MyButtonUsingState';

class App extends Component {
  render() {
    return (
      <div className="pp">
        <header className="App-header">
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
          <MyButtonUsingState text={"我是按鈕"}/>
        </header>
      </div>
    );
  }
}

export default App;
