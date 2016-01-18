import { INCREMENT_COUNTER } from '../actions/counter';

export function counter(state = { counter: 0 }, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}
