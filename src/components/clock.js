import React from 'react';
import moment from 'moment';
import '../App.css';
import '../roboto.css'

class Clock extends React.Component {
  state = {
    date : moment().format('MMMM Do YYYY'),
    time: moment().format('h:mm:ss a')
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ date: moment().format('MMMM Do YYYY'), time: moment().format('h:mm:ss a')}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="region left">
        <span className="small">{this.state.date}</span>
        <br />
        <span className="large thin">{this.state.time}</span>

      </div>
  )}
}

export default Clock;