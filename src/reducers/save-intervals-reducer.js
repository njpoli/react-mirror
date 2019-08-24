import { SAVE_INTERVALS } from '../actions/types';

export default function (state = [], action) {
  if (action.error) {
    return (action.error);
  }
  switch (action.type) {
    case SAVE_INTERVALS:
      return action.payload;
    default:
      return state;
  }
}