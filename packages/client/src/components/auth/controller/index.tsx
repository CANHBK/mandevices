import React, { useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import AuthPresentational from '../views';
import { HOME_URI } from 'routes';
import { useIsLoginQuery } from 'generated/apollo-react-hook.generated';

const AuthController: React.FC<RouteComponentProps> = ({ history }) => {
	const { data } = useIsLoginQuery();
	useEffect(() => {
		if (data && data.isLogin) {
			history.push(HOME_URI);
		}
	});

	return <AuthPresentational />;
};

export default withRouter(AuthController);
