import { RouteComponentProps, withRouter } from 'react-router-dom';

import { HOME_URI } from 'routes';
import LoginPresentational from '../views';
import { REGISTER_URI } from 'components/auth/routes';
import React from 'react';
import { TOKEN } from 'App';
import { useApolloClient } from '@apollo/react-hooks';
import { useLoginMutation } from 'generated/apollo-react-hook.generated';

const LoginController: React.FC<RouteComponentProps> = ({ history }) => {
	const [login, { loading, error }] = useLoginMutation();
	const apolloClient = useApolloClient();

	const handleLogin = async (email: string, password: string) => {
		const result = await login({
			variables: { email, password }
		});
		const { data } = result;
		if (data && data.login) {
			localStorage.setItem(TOKEN, data.login.token!);
			apolloClient.writeData({
				data: { isLogin: true }
			});
		}
	};

	const handleRedirectRegister = () => {
		history.push(REGISTER_URI);
	};

	return (
		<>
			<LoginPresentational
				onLogoClick={() => history.push(HOME_URI)}
				onLogin={handleLogin}
				loading={loading}
				error={error}
				onRedirectToRegister={handleRedirectRegister}
			/>
		</>
	);
};

export default withRouter(LoginController);
