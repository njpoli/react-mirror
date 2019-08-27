import React from 'react'
import '../App.css'
import '../roboto.css'
import { fetchUsers } from '../actions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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
    welcomeMessage : null,
    users : []
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.users !== this.props.users) {
      this.setState({users: Object.entries(this.props.users)})
    }
  }

  componentDidMount = () => {
    this.props.fetchUsers();
    document.addEventListener('keydown', this.handleKeyDown)
  }

  handleKeyDown = (event) => {
    const index = event.keyCode - 49;
    if (this.state.users[index]) {
      this.setState({current_user : this.state.users[index], welcomeMessage : `Welcome ${this.state.users[index][0]}`});
      setTimeout(() => { this.setState({welcomeMessage : null})}, 5 * 1000)

    } else if (event.keyCode === 27) {
      this.setState({current_user: {}})
    }
  }

  render = () => {
    if (this.state.current_user[0]) {
      return (
        <div>
          <span className="region middle center bright large">{this.state.welcomeMessage}</span>
          {this.state.current_user[1].map((widget, index) => {
            if (this.state.components[widget.widgetName]) {
              return React.createElement(this.state.components[widget.widgetName],
                {key: index, location: widget.location, current_user : this.state.current_user})
            } else return null;
          })}
        </div>
      )
    }
    if ( this.state.users ) {
      return (
        <div>
          <h1 className="bright" style={{textAlign: 'center'}}>Please select a user</h1>
          {this.state.users.map((user, index) => 
            <p className="bright" key={index}>{index + 1} - {user[0]}</p>)}
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