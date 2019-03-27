/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import 'react-native';
import 'jest-enzyme';
import React from 'react';
import { View } from 'react-native';
import { shallow } from 'enzyme';

import App from '../App';


class Component1 extends React.Component<{}> {
  render(){
    return <div>Marcos</div>;
  }
}

jest.mock('@terrylinla/react-native-sketch-canvas', () =>  'Component1');


it('renders correctly', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(View)).toMatchSnapshot();
});
