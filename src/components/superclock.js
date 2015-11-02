import React from 'react';

import Date from './date';
import Time from './time';
import Clock from './clock';

export default React.createClass({
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Date format="DD/MM/YYYY" />
          <Time format="HH:mm:ss" />
        </div>
        <Clock width="120" height="120"/>
      </div>
    );
  },
});
