import React from 'react'
import '../App.css'
import '../roboto.css'
import { fetchCompliments, saveIntervals } from '../actions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from 'moment';

class Compliment extends React.Component {
  componentDidMount = () => {
    this.getCompliments();
    let checkInterval = this.props.saved_intervals.filter((item) => (item.user == this.props.current_user.name && item.widget == 'Compliment'))
    if (checkInterval.length == 0)
    {
      this.setInterval = setInterval(() => this.getCompliments(), 1 * 60 * 1000);
      this.props.saveIntervals([...this.props.saved_intervals, {name: this.props.current_user.name, widget: 'Compliment'}])
    }

  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  getCompliments = () => {
    const hour = moment().hour();
    const params = { time : hour};
    return this.props.fetchCompliments(params);
  }

  render = () => {
    if (this.props.compliments[0]) {
      const randomCompliment = this.props.compliments[Math.floor(Math.random() * this.props.compliments.length)]
      return (
        <div className={this.props.location}>
        <span className='light bright'>{randomCompliment.message}</span>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    compliments: state.compliments,
    saved_intervals : state.saved_intervals
  }
}

const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators(
    { fetchCompliments, saveIntervals },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Compliment);