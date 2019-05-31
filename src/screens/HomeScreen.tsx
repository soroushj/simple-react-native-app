import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenOptions } from 'react-navigation';
import { IHomeScreenProps } from './HomeScreen.interfaces';
import styles from './styles';

export default class HomeScreen extends React.Component<IHomeScreenProps, {}> {
  static navigationOptions: NavigationScreenOptions = {
    title: 'Home',
  };

  onCounterPress = () => {
    this.props.navigation.navigate('Counter');
  };

  render() {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.elementContainer}>
          <Text>Welcome!</Text>
        </View>
        <View style={styles.elementContainer}>
          <Button title=" Counter " onPress={this.onCounterPress} />
        </View>
      </View>
    );
  }
}
