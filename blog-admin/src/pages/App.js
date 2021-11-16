import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import routrLists from '../config/router'

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          {routrLists.map(item => <Route {...item} key={item.path} />)}
        </Routes>
      </Router>
    </Suspense>

  );
}


