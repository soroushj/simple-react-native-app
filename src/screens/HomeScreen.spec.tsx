import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomeScreen from './HomeScreen';
import { IHomeScreenProps } from './HomeScreen.types';

const setup = () => {
  const props: IHomeScreenProps = {
    navigation: { navigate: jest.fn() } as any,
  };
  const wrapper = shallow(<HomeScreen {...props} />);
  return { wrapper, props };
};

test('HomeScreen snapshot', () => {
  const { wrapper } = setup();
  expect(toJson(wrapper)).toMatchSnapshot();
});

test('HomeScreen, counterButton press', () => {
  const { wrapper, props } = setup();
  const counterButton = wrapper.find('[testID="counterButton"]');
  const counterButtonProps = counterButton.props() as any;
  counterButtonProps.onPress();
  expect(props.navigation.navigate).toBeCalledWith('Counter');
});
