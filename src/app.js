import React from 'react';
import ReactDOM from 'react-dom';
import { SimpleClicker } from './components/simpleclicker';

require('babel-polyfill');

export function init() {
  ReactDOM.render(<SimpleClicker />, document.getElementById('app'));
}
