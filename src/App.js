import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login.js'
import Donation from './Donation.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn : false,
      page : null
    }
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Donation} />
        </Switch>
      </HashRouter>
    )
  }

  /* render() {
    console.log(this.state)
    if (!this.state.loggedIn) {
      return (
        <Login />
      );
    }
    else {
      if (this.state.page === "donation") {
        return (
          <Donation />
        );
      }
    }
  } */
}

export default App;
