import * as Redux from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

export const createStore = () =>
  Redux.createStore(reducers, Redux.applyMiddleware(ReduxThunk));
