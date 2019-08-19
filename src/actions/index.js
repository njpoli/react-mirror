import axios from 'axios'

import { FETCH_WEATHER } from './types'

const ROOT_WEATHER_URL = "https://api.weatherbit.io/v2.0/current"

export const fetchWeather = (params) => dispatch => {
  axios.get(`${ROOT_WEATHER_URL}`, {
    params: { ...params }
  })
  .then(response => {
    dispatch({ type: FETCH_WEATHER, payload: response.data})
  })
  .catch(error => {
    console.log(error)
  });
;}