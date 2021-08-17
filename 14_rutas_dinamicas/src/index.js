import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Team from './pages/Team';
import Product from './pages/Product';

ReactDOM.render(
  <Router>
    <Route exact path="/producto/:id" component={Product}/>
    <Route exact path="/" component={App} />
    <Route exact path="/equipo" component={Team} />
  </Router>,
  document.getElementById('root')
);

