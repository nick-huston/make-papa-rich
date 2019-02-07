import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Button variant="primary">Click here to make papa <i>RICH</i></Button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
