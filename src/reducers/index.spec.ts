import { Action } from 'redux';
import { configureStore } from '../helpers';
import { COUNTER_INCREMENT } from '../actions/counter';
import counter from './counter';

test('counter reducer, initial state', () => {
  const store = configureStore();
  const action: Action = { type: undefined };
  expect(store.getState().counter).toEqual(counter(undefined, action));
});

test('counter reducer, COUNTER_INCREMENT action', () => {
  const store = configureStore();
  const action: Action = { type: COUNTER_INCREMENT };
  store.dispatch(action);
  expect(store.getState().counter).toEqual(counter(undefined, action));
});
