import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenOptions } from 'react-navigation';
import { connect } from 'react-redux';
import { ICounterScreenProps } from './CounterScreen.types';
import { IRootState } from '../types';
import { counterIncrement } from '../actions/counter';
import styles from './styles';

class CounterScreen extends React.Component<ICounterScreenProps> {
  static navigationOptions: NavigationScreenOptions = {
    title: 'Counter',
  };

  onIncrementPress = () => {
    this.props.counterIncrement();
  };

  onBackPress = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={styles.screenContainer}>
        <View style={styles.elementContainer}>
          <Text>Counter value: {this.props.counterValue}</Text>
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

const mapStateToProps = (state: IRootState) => {
  return { counterValue: state.counter };
};

const mapDispatchToProps = { counterIncrement };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterScreen);
