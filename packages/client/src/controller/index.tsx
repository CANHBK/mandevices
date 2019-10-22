import React, { useEffect } from 'react';

import AppPresentations from '../views';
import { TOKEN } from 'App';
import routes from '../routes';
import { useApolloClient } from '@apollo/react-hooks';
import { useCurrentUserQuery } from 'generated/apollo-react-hook.generated';

const AppController = () => {
	const { data } = useCurrentUserQuery();
	const apolloClient = useApolloClient();
	useEffect(() => {
		if (
			data &&
			data.currentUser &&
			data.currentUser.token
		) {
			localStorage.setItem(
				TOKEN,
				data.currentUser.token
			);
			apolloClient.writeData({
				data: { isLogin: true }
			});
		}
	});
	return <AppPresentations routes={routes}></AppPresentations>;
};

export default AppController;
