import WeatherReducer from './weather-reducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  current_weather: WeatherReducer
});

export default rootReducer;