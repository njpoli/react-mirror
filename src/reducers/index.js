import WeatherReducer from './weather-reducer'
import TwitchStreamsReducer from './twitch-streams-reducer'
import ComplimentSReducer from './compliments-reducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  current_weather: WeatherReducer,
  twitch_streams : TwitchStreamsReducer,
  compliments_reducer : ComplimentSReducer
});

export default rootReducer;