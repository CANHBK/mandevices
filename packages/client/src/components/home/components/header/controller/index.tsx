import { RouteComponentProps, withRouter } from 'react-router';

import { HOME_URI } from 'routes';
import HeaderPresentation from '../views';
import React from 'react';
import routes from '../../../routes';

interface IHeader extends RouteComponentProps {}

const HeaderController: React.FC<IHeader> = ({ history }) => {
	return (
		<HeaderPresentation
			routes={routes}
			onLogoClick={() => history.push(HOME_URI)}
		></HeaderPresentation>
	);
};
export default withRouter(HeaderController);
