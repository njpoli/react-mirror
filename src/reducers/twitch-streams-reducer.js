import { FETCH_TWITCH_STREAMS } from '../actions/types';

export default function (state = [], action) {
  if (action.error) {
    return (action.error);
  }
  switch (action.type) {
    case FETCH_TWITCH_STREAMS:
      return action.payload.data;
    default:
      return state;
  }
}