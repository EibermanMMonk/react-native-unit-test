/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
// this will be use the setup test, added from package.json jest config
import 'react-native';
import 'jest-enzyme';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import App from '../App';

// mocking some libraries what are not important to the test case
jest.mock('@terrylinla/react-native-sketch-canvas', () =>  'Component1');

// testing with snapshot testing
it('renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(View)).toMatchSnapshot();
});
