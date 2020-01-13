import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HelloWorld from "./components/HelloWorld"; 
import GranappNavbar from './components/GranappNavbar';
import Home from './components/Home'
const App = () => {
  return (
      <div className="App">
          <GranappNavbar />
          <Switch>
              <Route exact path='/' component={Home} />
              {/* Last item in the Switch: will be matched if no other routes are matched before it. */}
          </Switch>
      </div>
  );
}

export default App;
