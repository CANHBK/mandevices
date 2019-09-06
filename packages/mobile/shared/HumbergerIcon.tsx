import { Ionicons } from '@expo/vector-icons';

import React from 'react';
import { withNavigation } from 'react-navigation';
import { NavigationInjectedProps } from 'react-navigation';

const HumbergerIcon: React.FC<NavigationInjectedProps> = ({ navigation }) => {
	return (
		<Ionicons
			style={{
				paddingLeft: 10
			}}
			name="md-menu"
			size={30}
			onPress={() => navigation.openDrawer()}
		/>
	);
};

export default withNavigation(HumbergerIcon);
