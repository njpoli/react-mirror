import { FETCH_USERS } from '../actions/types'

export default function (state = [], action) {
  if (action.error) {
    return (action.error);
  }
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
}