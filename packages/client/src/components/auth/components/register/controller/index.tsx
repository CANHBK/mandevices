import RegisterPresentational, { OnRegister } from '../views';
import { RouteComponentProps, withRouter } from 'react-router';

import { LOGIN_URI } from 'components/auth/routes';
import React from 'react';
import { useRegisterMutation } from 'generated/apollo-react-hook.generated';

const RegisterController: React.FC<RouteComponentProps> = ({ history }) => {
	const course: number[] = [];
	const [register, { loading, error,data }] = useRegisterMutation();
	for (let i = 50; i < 65; i++) {
		course.push(i);
	}

	const handleRegister: OnRegister = credentials => {
		register({ variables: credentials });
	};

	return (
		<RegisterPresentational
			loading={loading}
			onLoginClick={() => history.push(LOGIN_URI)}
			courses={course}
			error={error}
			success={data&&data.register}
			onRegister={handleRegister}
		/>
	);
};

export default withRouter(RegisterController);
