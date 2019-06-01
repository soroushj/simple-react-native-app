import { Action } from 'redux';
import { COUNTER_INCREMENT } from '../actions/counter';

export default (state = 0, action: Action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
