import React from 'react';
import moment from 'moment';

export default React.createClass({
  propTypes: {
    format: React.PropTypes.string.isRequired,
  },
  render() {
    return (
      <div>
        <h1>{moment().format(this.props.format)}</h1>
      </div>
    );
  },
});
