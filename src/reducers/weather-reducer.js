import { FETCH_WEATHER } from '../actions/types';

export default function (state = {}, action) {
  if (action.error) {
    return (action.error);
  }
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.data[0];
    default:
      return state;
  }
}