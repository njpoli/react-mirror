import WeatherReducer from './weather-reducer'
import TwitchStreamsReducer from './twitch-streams-reducer'
import ComplimentsReducer from './compliments-reducer'
import UsersReducer from './users-reducer'
import SaveIntervalsReducer from './save-intervals-reducer'
import NewsReducer from './news-reducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  current_weather: WeatherReducer,
  twitch_streams : TwitchStreamsReducer,
  compliments : ComplimentsReducer,
  users : UsersReducer,
  saved_intervals : SaveIntervalsReducer,
  news : NewsReducer
});

export default rootReducer;