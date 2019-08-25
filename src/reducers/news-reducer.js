import { FETCH_NEWS } from '../actions/types';

export default function (state = [], action) {
  if (action.error) {
    return (action.error);
  }
  switch (action.type) {
    case FETCH_NEWS:
      return action.payload.data;
    default:
      return state;
  }
}