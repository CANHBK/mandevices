import { RouteComponentProps, withRouter } from 'react-router-dom';

import { AUTH_URI } from 'routes';
import React from 'react';
import TopHeaderPresentational from '../views';

const TopHeaderController: React.FC<RouteComponentProps> = ({ history }) => {
	return (
		<TopHeaderPresentational
			onLoginClick={() => {
				history.push(AUTH_URI);
			}}
		/>
	);
};

export default withRouter(TopHeaderController);
