import { NavigationScreenProp, NavigationState } from 'react-navigation';

export interface ICounterScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface ICounterScreenState {
  counterValue: number;
}
