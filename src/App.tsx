import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './helpers';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppNavigator />
      </Provider>
    );
  }
}
