import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenOptions } from 'react-navigation';
import {
  ICounterScreenProps,
  ICounterScreenState,
} from './CounterScreen.interfaces';
import styles from './styles';

export default class CounterScreen extends React.Component<
  ICounterScreenProps,
  ICounterScreenState
> {
  static navigationOptions: NavigationScreenOptions = {
    title: 'Counter',
  };

  state = { counterValue: 0 };

  onIncrementPress = () => {
    this.setState(prevState => ({
      counterValue: prevState.counterValue + 1,
    }));
  };

  onBackPress = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.elementContainer}>
          <Text>Counter value: {this.state.counterValue}</Text>
        </View>
        <View style={styles.elementContainer}>
          <Button title=" +1 " onPress={this.onIncrementPress} />
        </View>
        <View style={styles.elementContainer}>
          <Button title=" Back " onPress={this.onBackPress} />
        </View>
      </View>
    );
  }
}
