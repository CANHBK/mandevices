import { RouteComponentProps, withRouter } from 'react-router';

import { AUTH_URI } from 'routes';
import DrawerPresentational from '../views';
import React from 'react';
import { navRoutes } from 'components/home/routes';
import { useLogOutMutation } from 'generated/apollo-react-hook.generated';

interface IDrawer extends RouteComponentProps {}
const DrawerController: React.FC<IDrawer> = ({ history }) => {
	const [logOut] = useLogOutMutation();
	return (
		<DrawerPresentational
			onLoginClick={() => history.push(AUTH_URI)}
			routes={navRoutes}
			onLogOutClick={() => logOut()}
		/>
	);
};

export default withRouter(DrawerController);
