import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import App from './components/App.jsx';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} />
  </Router>
);

export default routes;