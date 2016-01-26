import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { SimpleClicker } from './components/simpleclicker';

export function init() {
  ReactDOM.render(<SimpleClicker />, document.getElementById('app'));
}
