import { Switch, Route, Redirect } from 'react-router-dom'
import React, { Suspense } from 'react';
import Routes from '../config/router'

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {Routes.map(item => <Route {...item} key={item.path} />)}
        <Redirect to='login' />
      </Switch>
    </Suspense>
  );
}


