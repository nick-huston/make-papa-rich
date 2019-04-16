import React, { Component } from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login.js'
import Donation from './Donation.js'
import Settings from './Settings.js'
import Logout from './Logout.js'
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
          <Route path='/donation' component={Donation} />
          <Route path='/' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/settings' component={Settings} />
        </Switch>
      </HashRouter>
    )
  }
}

export default App;
