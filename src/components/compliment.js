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

  getTwitchStreams = () => {
    const hour = moment().hour();
    
  }

}