import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

export const configureStore = () =>
  createStore(reducers, applyMiddleware(ReduxThunk));
