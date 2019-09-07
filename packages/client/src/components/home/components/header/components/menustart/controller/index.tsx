import React from 'react';
import MenuStartPresentations from '../views';
import { navRoutes } from '../../../routes';

const MenuStartController = () => {
	return (
		<MenuStartPresentations
			routes={navRoutes}
		></MenuStartPresentations>
	);
};
export default MenuStartController;
