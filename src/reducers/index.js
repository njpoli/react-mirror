import WeatherReducer from './weather-reducer'
import TwitchStreamsReducer from './twitch-streams-reducer'
import ComplimentSReducer from './compliments-reducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  current_weather: WeatherReducer,
  twitch_streams : TwitchStreamsReducer,
  compliments : ComplimentSReducer
});

export default rootReducer;