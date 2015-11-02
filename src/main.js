import React from 'react';
import ReactDOM from 'react-dom';

import SuperClock from './components/superclock';

require('babel/polyfill');
require('moment/locale/fr');

export function init() {
  ReactDOM.render(<SuperClock />, document.getElementById('app'));
}
