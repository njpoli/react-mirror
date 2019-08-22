import React from 'react'
import '../App.css'
import '../roboto.css'
import { fetchCompliments } from '../actions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { config } from "../config";
import moment from 'moment';

class Compliment extends React.Component {
  componentDidMount = () => {
    this.getCompliments();
    this.setInterval = setInterval(() => this.getCompliments(), 1 * 60 * 1000);
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
        <div className='region lower third '>
        <span className='bold'>{randomCompliment.message}</span>
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
    compliments: state.compliments
  }
}

const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators(
    { fetchCompliments },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Compliment);