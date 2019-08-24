import React from 'react'
import '../App.css'
import '../roboto.css'
import { fetchTwitchStreams } from '../actions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { config } from "../config";
import moment from 'moment';

class Twitch extends React.Component {

  componentDidMount = () => {
    this.getTwitchStreams();
    this.interval = setInterval(() => this.getTwitchStreams(), 3 * 60 * 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  getTwitchStreams = () => {
    const myStreamsString = config.MY_TWITCH_STREAM_DATA.data.map(followed => `user_login=${followed.to_name}`).join('&')
    return this.props.fetchTwitchStreams(myStreamsString);
  }

  render = () => {
    if (this.props.twitch_streams[0]) {
      const randomStreamer = this.props.twitch_streams[Math.floor(Math.random() * this.props.twitch_streams.length)]
      const randomStreamerTime = randomStreamer.started_at.split('T')[1].split('Z');
      const momentStreamerTime = moment(randomStreamerTime, 'HH:mm:ss').subtract(4, 'h').format('h:mm a');
      return (
        <div className={this.props.location}>
          <span className="bold small bright">Twitch</span>
          <br />
          <span className="bold small bright">{randomStreamer.user_name} started streaming at {momentStreamerTime}</span>
        </div>
    ) }
    else return (
      <div className={this.props.location}></div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    twitch_streams: state.twitch_streams
  }
}

const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators(
    { fetchTwitchStreams },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Twitch);