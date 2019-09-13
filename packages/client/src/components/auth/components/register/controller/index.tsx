import { RouteComponentProps, withRouter } from 'react-router';

import { LOGIN_URI } from 'components/auth/routes';
import React from 'react';
import MyForm from '../views';

const RegisterController: React.FC<RouteComponentProps> = ({ history }) => {
	const course: number[] = [];
	for (let i = 50; i < 65; i++) {
		course.push(i);
	}
	return (
		<MyForm
			onLoginClick={() => history.push(LOGIN_URI)}
			courses={course}
		/>
	);
};

export default withRouter(RegisterController);
