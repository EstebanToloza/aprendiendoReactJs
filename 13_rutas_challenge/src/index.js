import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Team from './pages/Team';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/equipo" component={Team} />
  </Router>,
  document.getElementById('root')
);


