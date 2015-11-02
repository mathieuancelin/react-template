import React from 'react';
import moment from 'moment';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>{moment().format(this.props.format)}</h1>
      </div>
    );
  }
});
