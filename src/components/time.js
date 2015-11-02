import React from 'react';
import moment from 'moment';

export default React.createClass({
  getInitialState() {
    return {
      time: moment().format(this.props.format)
    };
  },
  updateTime() {
    this.setState({
      time: moment().format(this.props.format)
    });
  },
  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  render() {
    return (
      <div>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
});
