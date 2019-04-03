import React, { Component } from 'react';
import './App.css';
import Login from './Login.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn : false
    }
  }

  render() {
    if (!this.state.loggedIn) {
      console.log(this.state)
      return (
        <Login />
      );
    }
  }
}

export default App;
