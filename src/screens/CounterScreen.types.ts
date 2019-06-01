import { NavigationScreenProp, NavigationState } from 'react-navigation';
import { Action } from 'redux';

export interface ICounterScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
  counterValue: number;
  counterIncrement(): Action;
}
