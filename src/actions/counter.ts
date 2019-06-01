import { Action } from 'redux';

export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';

export const counterIncrement = (): Action => ({ type: COUNTER_INCREMENT });
