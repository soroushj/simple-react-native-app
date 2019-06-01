import { Action } from 'redux';
import { counterIncrement, COUNTER_INCREMENT } from './counter';

test('counterIncrement action creator', () => {
  const expectedAction: Action = { type: COUNTER_INCREMENT };
  expect(counterIncrement()).toEqual(expectedAction);
});
