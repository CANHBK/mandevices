import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
const Register: React.FC<NavigationInjectedProps> = ({ navigation }) => {
	return (
		<View>
			<Button
				title="Đăng kí"
				onPress={() => {
					navigation.navigate(
						'Home'
					);
				}}
			/>
		</View>
	);
};

export default withNavigation(Register);
