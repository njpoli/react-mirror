import React from 'react'
import '../App.css'
import '../roboto.css'
import { fetchWeather } from '../actions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { config } from "../config"

class Weather extends React.Component {

  componentDidMount = () => {
    this.getWeather();
  }

  //Gets the current weather for Durham, NC
  getWeather = () => {
    const weatherParams = {
      key: config.WEATHER_API_KEY,
      city: "Durham,NC",
      units: "I"
    }
    return this.props.fetchWeather(weatherParams)
  }

  render = () => {
    if (this.props.currentWeather.weather) {
    return (
    <div className="region bottom">
      <table>
        <tbody>
          <tr>
            <td className="icon2 xlarge bright" rowSpan='3'>
              <i className={"wi " + config.codeIconTable[this.props.currentWeather.weather.code]}></i>
            </td>
            <td className="title2 bright" colSpan="4" align="center">{this.props.currentWeather.weather.description.split()}</td>
          </tr>
          <tr>
            <td className="small bright" colSpan="4" align="left">{this.props.currentWeather.temp + "°F"}</td>
          </tr>
          <tr>
            <td className="small bright" align="left">{this.props.currentWeather.city_name + ', ' + this.props.currentWeather.state_code}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )} else {
    return (
      <div className="region bottom">
        <p className="thin">Loading Weather...</p>
      </div>
    )}
  }
}

const mapStateToProps = (state) => {
  return {
    currentWeather: state.current_weather
  }
}

const mapDispatchToProps = (dispatch) =>  {
  return bindActionCreators(
    { fetchWeather },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);