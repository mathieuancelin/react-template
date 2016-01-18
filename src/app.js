import React from 'react';
import ReactDOM from 'react-dom';
import { SimpleClicker } from './components/simpleclicker';

require('babel-polyfill');

// simpler version of the app without router and redux.
export function init() {
  ReactDOM.render(<SimpleClicker />, document.getElementById('app'));
}
