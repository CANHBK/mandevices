import { RouteComponentProps, withRouter } from 'react-router-dom';

import LoginPresentational from '../views';
import { REGISTER_URI } from 'components/auth/routes';
import React from 'react';

const LoginController: React.FC<RouteComponentProps> = ({ history }) => {
	return (
		<LoginPresentational
			onRegisterClick={() =>
				history.push(REGISTER_URI)
			}
		/>
	);
};

export default withRouter(LoginController);
