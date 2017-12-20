import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Roster from './roster';
import Schedule from './schedule';

class Body extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/roster' component={Roster}/>
          <Route path='/schedule' component={Schedule}/>
        </Switch>
      </main>
    );
  }
}

export default Body;
