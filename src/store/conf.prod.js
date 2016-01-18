import { createStore } from 'redux';
import { counter } from '../reducers';

export function configureCounterStore(initialState) {
  return createStore(counter, initialState);
}
