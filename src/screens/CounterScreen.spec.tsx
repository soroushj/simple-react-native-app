import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { CounterScreen } from './CounterScreen';
import { ICounterScreenProps } from './CounterScreen.types';

const setup = () => {
  const props: ICounterScreenProps = {
    navigation: { navigate: jest.fn() } as any,
    counterValue: 10,
    counterIncrement: jest.fn(),
  };
  const wrapper = shallow(<CounterScreen {...props} />);
  return { wrapper, props };
};

test('CounterScreen snapshot', () => {
  const { wrapper } = setup();
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('CounterScreen, incrementButton press', () => {
  const { wrapper, props } = setup();
  const incrementButton = wrapper.find('[testID="incrementButton"]');
  const incrementButtonProps = incrementButton.props() as any;
  incrementButtonProps.onPress();
  expect(props.counterIncrement).toBeCalled();
});

test('CounterScreen, backButton press', () => {
  const { wrapper, props } = setup();
  const backButton = wrapper.find('[testID="backButton"]');
  const backButtonProps = backButton.props() as any;
  backButtonProps.onPress();
  expect(props.navigation.navigate).toBeCalledWith('Home');
});
