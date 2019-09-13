import { Redirect, Route, Switch } from 'react-router-dom';
import authRoutes, { LOGIN_URI } from '../routes';

import React from 'react';

const AuthPresentational = () => {
	return (
		<Switch>
			{authRoutes.map(
				({
					id,
					uri,
					component,
					exact
				}) => (
					<Route
						key={id}
						path={
							uri
						}
						component={
							component
						}
						exact={
							exact
						}
					/>
				)
			)}
			<Redirect to={LOGIN_URI} />
		</Switch>
	);
};

export default AuthPresentational;
