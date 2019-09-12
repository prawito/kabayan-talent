import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Router from './router';

const App = () => {
  return (
    <BrowserRouter>
      {Router.map((route, index) => {
        return (
          <Route key={index} exact path={route.path} component={route.component} />
        )
      })}
    </BrowserRouter>
  )
}

export default App;