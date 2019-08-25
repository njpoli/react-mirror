import React from 'react'
import '../App.css'
import '../roboto.css'
import { fetchTwitchStreams, saveIntervals } from '../actions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { config } from "../config";
import moment from 'moment';
import { local_data } from "../local-data"

class Twitch extends React.Component {

  state = {
    randomStreamer : {},
    streamerTime : ''
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.randomStreamer !== this.state.randomStreamer) {
      const randomStreamerTime = this.state.randomStreamer.started_at.split('T')[1].split('Z');
      const momentStreamerTime = moment(randomStreamerTime, 'HH:mm:ss').subtract(4, 'h').format('h:mm a');
      this.setState({streamerTime : momentStreamerTime})
    }
  }

  componentDidMount = () => {
    this.setState({randomStreamer : local_data.twitch_streams[Math.floor(Math.random() * local_data.twitch_streams.length)]})
    const self = this
    const checkInterval = this.props.saved_intervals.filter((item) => item.name === self.props.current_user.name && item.widget === 'Twitch')
    if (checkInterval.length === 0)
    {
      this.setInterval = setInterval(() => this.setState({localTwitchState : local_data.twitch_streams[Math.floor(Math.random() * local_data.twitch_streams.length)]}), 3 * 60 * 1000);
      this.props.saveIntervals([...this.props.saved_intervals, {name: this.props.current_user.name, widget: 'Twitch'}])
    }
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  getTwitchStreams = () => {
    const myStreamsString = config.MY_TWITCH_STREAM_DATA.data.map(followed => `user_login=${followed.to_name}`).join('&')
    return this.props.fetchTwitchStreams(myStreamsString);
  }

  render = () => {
    if (local_data.twitch_streams[0]) {
      return (
        <div className={this.props.location}>
          <span className="bold small bright">Twitch</span>
          <br />
          <span className="bold small bright">{this.state.randomStreamer.user_name} started streaming at {this.state.streamerTime}</span>
        </div>
    ) }
    else return (
      <div className={this.props.location}></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    twitch_streams: state.twitch_streams,
    saved_intervals : state.saved_intervals
  }
}

const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators(
    { fetchTwitchStreams, saveIntervals },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twitch);