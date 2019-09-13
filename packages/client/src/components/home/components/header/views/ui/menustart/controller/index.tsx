import { IRoute } from '../../../../../../../../interface';
import MenuStartPresentations from '../views';
import React from 'react';
import { navRoutes } from '../../../../../../routes';

const MenuStartController: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
	return (
		<MenuStartPresentations
			routes={navRoutes}
		></MenuStartPresentations>
	);
};
export default MenuStartController;
