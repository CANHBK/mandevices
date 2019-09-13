import { RouteComponentProps, withRouter } from 'react-router-dom';

import UserLoginForm from '../views';
import { REGISTER_URI } from 'components/auth/routes';
import React from 'react';

const LoginController: React.FC<RouteComponentProps> = ({ history }) => {
	return (
		<UserLoginForm
			onRegisterClick={() =>
				history.push(REGISTER_URI)
			}
		/>
	);
};

export default withRouter(LoginController);
