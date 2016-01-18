import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import { NotFound } from './pages/404';
import { About } from './pages/about';
import { App } from './pages/app';

require('babel-polyfill');

const history = createHistory({ queryKey: false });
history.__v2_compatible__ = true;

// complex version of the app. Change webpack.config.js at `entry` to use this version
export function init() {
  ReactDOM.render((
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="/about" component={About}/>
      <Route path="*" component={NotFound} />
    </Router>
  ), document.getElementById('app'));
}
