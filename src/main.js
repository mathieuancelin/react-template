import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { NotFound } from './pages/404';
import { About } from './pages/about';
import { App } from './pages/app';

require('babel-polyfill');

export function init() {
  ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="about" component={About}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  ), document.getElementById('app'));
}
