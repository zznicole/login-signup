import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route past="/signup" component={SignupScreen} />
        <Route component={LoginScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;