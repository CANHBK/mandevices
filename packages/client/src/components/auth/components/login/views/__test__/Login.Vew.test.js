import LoginPresentational from '..';
import React from 'react';
import { shallow } from 'enzyme';

test('render without crashing', () => {
	const wrapper = shallow(<LoginPresentational />);
});
