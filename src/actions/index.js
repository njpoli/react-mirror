import axios from 'axios'
import { FETCH_WEATHER, FETCH_TWITCH_STREAMS, FETCH_COMPLIMENTS, FETCH_USERS, SAVE_INTERVALS } from './types'
import { config } from '../config'

const ROOT_WEATHER_URL = "https://api.weatherbit.io/v2.0/current"
const ROOT_TWITCH_STREAM_URL = "https://api.twitch.tv/helix/streams"
const ROOT_COMPLIMENTS_URL = "http://localhost:8000/compliments"
const ROOT_USERS_URL = "http://localhost:8000/users"

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

export const fetchCompliments = (params) => dispatch => {
  axios.get(`${ROOT_COMPLIMENTS_URL}`, {
    params: { ...params}
  })
    .then(response => {
      dispatch({ type: FETCH_COMPLIMENTS, payload: response.data})
    })
    .catch(error => {
      console.log(error)
    })
}

export const fetchUsers = () => dispatch => {
  axios.get(`${ROOT_USERS_URL}`)
    .then(response => {
      dispatch({ type: FETCH_USERS, payload: response.data})
    })
    .catch(error => {
      console.log(error)
    })
}


//Function to save currently running intervals so they do not keep getting added
export const saveIntervals = (params) => dispatch => {
  dispatch({type : SAVE_INTERVALS, payload: params})
}