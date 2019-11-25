import { DrawerArea } from 'shared/Drawer';
import DrawerComponent from '../components/drawer';
import { Header } from 'shared/Header';
import { HeaderLogo } from 'shared/Logo';
import React from 'react';

const HeaderPresentational = () => {
	return (
		<Header>
			<DrawerArea>
				<DrawerComponent />
			</DrawerArea>
			<HeaderLogo />
		</Header>
	);
};

export default HeaderPresentational;
