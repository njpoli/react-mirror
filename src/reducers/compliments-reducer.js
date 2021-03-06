import { FETCH_COMPLIMENTS } from '../actions/types';

export default function (state = [], action) {
  if (action.error) {
    return (action.error);
  }
  switch (action.type) {
    case FETCH_COMPLIMENTS:
      return action.payload;
    default:
      return state;
  }
}