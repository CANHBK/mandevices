import Enzyme, { shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Personals from '../../personals';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });



/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param props - Component props specific to this setup
 * @param state - Initial state for setup
 */
const setup = (props = {}, state = null) => {
	return shallow(<Personals {...props} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param wrapper Enzyme shallow wrapper to search within
 * @param val Value of data-test attribute for search
 */
const findByTestAtrr = (wrapper: Enzyme.ShallowWrapper, val: string) => {
	return wrapper.find(`[data-test]=${val}`);
};

test('render without crashing', () => {
	const wrapper = setup();
	const appComponent = findByTestAtrr(wrapper, 'component-personals');

	expect(appComponent.length).toBe(1);
});
