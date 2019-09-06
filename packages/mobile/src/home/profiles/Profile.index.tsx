import React from 'react';
import { Text } from 'react-native';
import Container from '../../../shared/Container';
import { createStackNavigator } from 'react-navigation';
import HumbergerIcon from '../../../shared/HumbergerIcon';

const Profile = () => {
	return (
		<Container>
			<Text>trang ca nhan</Text>
		</Container>
	);
};

export default createStackNavigator({
	Profile: {
		screen: Profile,
		navigationOptions: {
			headerTitle: 'Trang cá nhân',
			headerLeft: <HumbergerIcon />
		}
	}
});
