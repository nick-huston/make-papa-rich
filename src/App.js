import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login.js'
import Donation from './Donation.js'
import "bootstrap-slider/dist/css/bootstrap-slider.css"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn : false,
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
}

export default App;
