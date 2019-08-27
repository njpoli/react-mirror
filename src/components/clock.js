import React from 'react';
import moment from 'moment';
import '../App.css';
import '../roboto.css';
import { saveIntervals } from '../actions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Clock extends React.Component {
  state = {
    date : moment().format('MMMM Do YYYY'),
    time: moment().format('h:mm:ss a')
  }

  componentDidMount = () => {
    const self = this
    const checkInterval = this.props.saved_intervals.filter((item) => item.name === self.props.current_user.name && item.widget === 'Clock')
    if (checkInterval.length === 0)
    {
      this.setInterval = setInterval(() => this.setState({ date: moment().format('MMMM Do YYYY'), time: moment().format('h:mm:ss a')}), 1000);
      this.props.saveIntervals([...this.props.saved_intervals, {name: this.props.current_user.name, widget: 'Clock'}])
    }
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

const mapStateToProps = (state) => {
  return {
    saved_intervals : state.saved_intervals
  }
}

const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators(
    { saveIntervals },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock);
