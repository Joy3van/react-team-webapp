/*********************************************************************************
*  WEB422 – Assignment 04
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part of this
*  assignment has been copied manually or electronically from any other source (including web sites) or 
*  distributed to other students.
* 
*  Name: _Yifan Zhao_ Student ID: _138736186_ Date: _Nov.2nd.2019_
*
********************************************************************************/

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Overview from './components/Overview'
import Projects from './components/Projects'
import Teams from './components/Teams'
import Employees from './components/Employees'
import NotFound from './components/NotFound'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' render={() => (
          <Overview />
        )} />
        <Route exact path='/projects' render={() => (
          <Projects />
        )} />
        <Route exact path='/teams' render={() => (
          <Teams />
        )} />
        <Route exact path='/employees' render={() => (
          <Employees />
        )} />
        <Route render={() => (
          <NotFound />
        )} />
      </Switch>
    );
  }
} 
export default App;