import axios from 'axios'
import { FETCH_WEATHER, FETCH_TWITCH_STREAMS } from './types'
import { config } from '../config'

const ROOT_WEATHER_URL = "https://api.weatherbit.io/v2.0/current"
const ROOT_TWITCH_STREAM_URL = "https://api.twitch.tv/helix/streams"

export const fetchWeather = (params) => dispatch => {
  axios.get(`${ROOT_WEATHER_URL}`, {
    params: {...params }
  })
  .then(response => {
    dispatch({ type: FETCH_WEATHER, payload: response.data})
  })
  .catch(error => {
    console.log(error)
  });
;}

export const fetchTwitchStreams = (params) => dispatch => {
  axios.get(`${ROOT_TWITCH_STREAM_URL}?${params}`, {
    headers: { "Client-ID" : config.TWITCH_CLIENT_ID}
  })
  .then(response => {
    dispatch({ type: FETCH_TWITCH_STREAMS, payload: response.data})
  })
  .catch(error => {
    console.log(error)
  })
}