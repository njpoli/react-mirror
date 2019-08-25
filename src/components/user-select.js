import React from 'react'
import '../App.css'
import '../roboto.css'
import { fetchUsers } from '../actions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { config } from "../config";
import Clock from './clock.js'
import Weather from './weather.js'
import Twitch from './twitch.js'
import Compliment from './compliment.js'
import News from './news.js'


//This class should allow selection of a user to get their specific configuration from
//Mongo, then render their specific configuration
class UserSelect extends React.Component {
  state = {
    current_user : {},
    components : {
      "Clock" : Clock,
      "Weather" : Weather,
      "Twitch" : Twitch,
      "Compliment" : Compliment,
      "News" : News
    },
    welcomeMessage : null
  }

  componentDidMount = () => {
    this.props.fetchUsers();
    document.addEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (event) => {
    const index = event.keyCode - 49;
    if (this.props.users[index]) {
      this.setState({current_user : this.props.users[index], welcomeMessage : `Welcome ${this.props.users[index].name}`});
      setTimeout(() => { this.setState({welcomeMessage : null})}, 5 * 1000)

    } else if (event.keyCode === 27) {
      this.setState({current_user: {}})
    }
  }

  render = () => {
    if (this.state.current_user.name) {
      return (
        <div>
          <span className="region middle center bright large">{this.state.welcomeMessage}</span>
          {this.state.current_user.widgets.map((widget, index) => {
            if (this.state.components[widget.name]) {
              return React.createElement(this.state.components[widget.name],
                {key: index, location: widget.location, current_user : this.state.current_user})
            }
          })}
        </div>
      )
    }
    if (this.props.users.length > 0) {
      return (
        <div>
          <h1 className="bright" style={{textAlign: 'center'}}>Please select a user</h1>
          {this.props.users.map((user, index) => 
            <p className="bright" key={user._id}>{index + 1} - {user.name}</p>)}
        </div>
      )
    }
    return (
      <div>Getting users...</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users : state.users
  }
}


const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators(
    { fetchUsers },
    dispatch
  )
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSelect);