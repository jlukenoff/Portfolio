import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './Components/App/App';

render(
  <Router>
    <Route path="/" render={({ location }) => <App location={location} />} />
  </Router>,
  document.getElementById('app')
);
