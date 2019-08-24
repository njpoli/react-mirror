import React from 'react';
import moment from 'moment';
import '../App.css';
import '../roboto.css'

class Clock extends React.Component {
  state = {
    date : moment().format('MMMM Do YYYY'),
    time: moment().format('h:mm:ss a')
  }

  componentDidMount = () => {
    this.interval = setInterval(() => this.setState({ date: moment().format('MMMM Do YYYY'), time: moment().format('h:mm:ss a')}), 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render = () => {
    return (
      <div className={this.props.location}>
        <span className="small bold bright">{this.state.date}</span>
        <br />
        <span className="bold bright">{this.state.time}</span>

      </div>
  )}
}

export default Clock;