import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Login from './Login'
import Admin from './Admin'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login/" exact component={Login} />
        <Route path="/Admin/" component={Admin} />
        <Route path="/index/" component={Admin} />
        <Route path="*" component={Login} />
      </Router>
    </div >
  );

}


