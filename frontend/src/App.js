import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import GranappNavbar from './components/GranappNavbar';
import Home from './components/Home'
import Bars from './components/Bars'
import Addbar from './components/Addbar'
import Login from './components/Login'
import Adds from './components/Adds'
import NewAdd from './components/NewAdd'

const App = () => {
  return (
      <div className="App">
          <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/bars' component={Bars} />
              <Route exact path='/bars/add' component={Addbar} />
              <Route exact path='/adds' component={Adds} />
              <Route exact path='/adds/new' component={NewAdd} />
          </Switch>
      </div>
  );
}

export default App;
