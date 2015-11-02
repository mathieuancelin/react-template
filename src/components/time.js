import React from 'react';
import moment from 'moment';

export default React.createClass({
  propTypes: {
    format: React.PropTypes.string.isRequired,
  },
  getInitialState() {
    return {
      time: moment().format(this.props.format),
    };
  },
  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  updateTime() {
    this.setState({
      time: moment().format(this.props.format),
    });
  },
  render() {
    return (
      <div>
        <h2>{this.state.time}</h2>
      </div>
    );
  },
});
