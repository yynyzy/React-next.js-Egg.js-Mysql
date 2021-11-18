import React from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';

import Login from './Login'
import Admin from './Admin'

export default function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          {/* <Route path="/admin" exact component={Admin} /> */}
          <Route path="/index" exact component={Admin} />
        </Switch>
      </Router>

    </div >
  );

}


