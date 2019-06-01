import { Action } from 'redux';
import { COUNTER_INCREMENT } from '../actions/counter';
import counter from './counter';

test('initial state', () => {
  const action: Action = { type: undefined };
  expect(counter(undefined, action)).toBe(0);
});

test('COUNTER_INCREMENT action', () => {
  const action: Action = { type: COUNTER_INCREMENT };
  expect(counter(10, action)).toBe(11);
});
