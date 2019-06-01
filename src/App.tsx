import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from './helpers';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore()}>
        <AppNavigator />
      </Provider>
    );
  }
}
