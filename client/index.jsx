import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './Components/App/App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
