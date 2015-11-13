import React from 'react';
import ReactDOM from 'react-dom';

import SuperClock from './components/superclock';

require('babel-polyfill');

export function init() {
  ReactDOM.render(<SuperClock />, document.getElementById('app'));
}
