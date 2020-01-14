import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import GranappNavbar from './components/GranappNavbar';
import Home from './components/Home'
import Bars from './components/Bars'
import Addbar from './components/Addbar'

const App = () => {
  return (
      <div className="App">
          <GranappNavbar />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/bars' component={Bars} />
              <Route exact path='/bars/add' component={Addbar} />
          </Switch>
      </div>
  );
}

export default App;
