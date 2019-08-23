import React from 'react'
import '../App.css'
import '../roboto.css'
import { fetchTwitchStreams } from '../actions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { config } from "../config";
import moment from 'moment';


//This class should allow selection of a user to get their specific configuration from
//Mongo, then render their specific configuration
class UserSelect extends React.Component {
  state = {
    user : {}
  }


  
  render = () => {
    return (
      <div>
        <span>Hello World</span>
      </div>
    )
  }
}

export default UserSelect;