import React from 'react';
import {
	createBottomTabNavigator,
	createStackNavigator
} from 'react-navigation';

import Profile from './profiles';
import Members from './members';

const HomeTabNavigator = createBottomTabNavigator({
	Profile,
	Members
});

export default createStackNavigator(
	{ HomeTabNavigator },
	{
		defaultNavigationOptions: { header: null }
	}
);
