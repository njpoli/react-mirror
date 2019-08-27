import React from 'react'
import '../App.css'
import '../roboto.css'
import { fetchCompliments, saveIntervals } from '../actions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from 'moment';
import {local_data} from '../local-data'

class Compliment extends React.Component {
  state = {
    random_compliment : '',
    compliments : []
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.compliments != this.state.compliments) {
      this.setState({random_compliment : this.state.compliments[Math.floor(Math.random() * this.state.compliments.length)].message});
    }
  }
  
  componentDidMount = () => {
    this.setState({compliments: this.getCompliments()});
    const self = this
    const checkInterval = this.props.saved_intervals.filter((item) => item.name === self.props.current_user.name && item.widget === 'Compliment')
    if (checkInterval.length === 0)
    {
      this.setInterval = setInterval(() => this.setState({random_compliment : this.state.compliments[Math.floor(Math.random() * this.state.compliments.length)].message}), 1 * 60 * 1000);
      this.props.saveIntervals([...this.props.saved_intervals, {name: this.props.current_user.name, widget: 'Compliment'}])
    }

  }

  getCompliments = () => {
    const hour = moment().hour();
    return local_data.compliments.filter(compliment => {
      const morning = [5, 11]
      const noon = [12, 18]
      if (hour <= morning[0] && hour >= morning[1]) {
        return compliment.time === 'Morning' || compliment.time === 'Anytime'
      } else if (hour <= noon[0] && hour >= noon[1]) {
        return compliment.time === 'Afternoon' || compliment.time === 'Anytime'
      } else {
        return compliment.time === 'Night' || compliment.time === 'Anytime'
      }
    })
  }

  render = () => {
    if (local_data.compliments[0]) {
      return (
        <div className={this.props.location}>
        <span className='light bright'>{this.state.random_compliment}</span>
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
