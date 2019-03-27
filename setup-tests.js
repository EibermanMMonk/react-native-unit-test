import 'react-native';
import 'jest-enzyme';
// add Enzyme for test environment
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// Enzyme uses JSDOM for virtual DOM
const { JSDOM } = require('jsdom');
// default config for DOM
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

// Im not using this fn, but its for apply all properties of one object to another.
function copyProps(src, target) {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target),
    });
}

// setting globals
global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
//copyProps(window, global);
//Configuring adapter for react 16
Enzyme.configure({ adapter: new Adapter() });

// Removing warnings from console, for a cleanest console log
const originalConsoleError = console.error;
console.error = (message) => {
    if (message.startsWith('Warning:')) {
        return;
    }

    originalConsoleError(message);
};