import React from 'react';
import moment from 'moment';

export default React.createClass({
  propTypes: {
    width: React.PropTypes.number.isRequired,
    height: React.PropTypes.number.isRequired,
  },
  getInitialState() {
    return {
      time: moment(),
    };
  },
  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  },
  componentWillUnmount() {
    clearInterval(this.interval);
  },
  hoursRotation() {
    return `rotate(${30 * this.state.time.hours() + this.state.time.minutes() / 2})`;
  },
  minutesRotation() {
    return `rotate(${6 * this.state.time.minutes() + this.state.time.seconds() / 10})`;
  },
  secondsRotation() {
    return `rotate(${6 * this.state.time.seconds()})`;
  },
  updateTime() {
    this.setState({
      time: moment(),
    });
  },
  render() {
    return (
      <div className="clock" style={{ width: this.props.width, height: this.props.height }}>
        <svg viewBox="0 0 100 100">
          <g transform="translate(50,50)">
            <circle className="clock-face" r="48"/>
            <line className="hour" y1="2" y2="-20" transform={this.hoursRotation()}/>
            <line className="minute" y1="4" y2="-30" transform={this.minutesRotation()}/>
            <g transform={this.secondsRotation()}>
              <line className="second" y1="10" y2="-38"/>
              <line className="second-counterweight" y1="10" y2="2"/>
            </g>
          </g>
        </svg>
      </div>
    );
  },
});
