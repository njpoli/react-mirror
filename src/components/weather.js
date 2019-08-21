import React from 'react'
import '../App.css'
import '../roboto.css'
import { fetchWeather } from '../actions'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { config } from "../config"

class Weather extends React.Component {

  // componentDidMount = () => {
  //   this.getWeather();
  // }

  // getWeather = () => {
  //   const weatherParams = {
  //     key: config.WEATHER_API_KEY,
  //     city: "Raleigh,NC",
  //     units: "I"
  //   }

  //   return this.props.fetchWeather(weatherParams)
  // }

  render = () => {
    if (config.currWeather) {
    return (
    <div className="region bottom">
      <table>
        <tr>
          <td className="icon2 xlarge" rowSpan='2'>
            <i className={"wi " + config.codeIconTable[config.currWeather.weather.code]}></i>
          </td>
          <td className="title2 bright" colSpan="4" align="center">{config.currWeather.weather.description.split()}</td>
        </tr>
        <tr>
          <td className="small">{"Feels Like " + config.currWeather.app_temp + " °F (" + config.currWeather.temp + "°F)"}</td>
        </tr>
        <tr>
          <td>{}</td>
        </tr>
      </table>
    </div>
  )} else {
    return (
      <div className="region bottom">
        <p className="thin">Loading Weather...</p>
      </div>
    )
  }}
  
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