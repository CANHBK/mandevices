import { Route, Switch } from 'react-router-dom';

import BottomComponent from './footer';
import HeaderComponent from './header';
import React from 'react';
import routes from '../routes';

const HomePresentations = () => {
	return (
		<>
			<HeaderComponent />
			<Switch>
				{routes.map(
					({
						uri,
						component,
						id,
						exact
					}) => (
						<Route
							exact={
								exact
							}
							path={
								uri
							}
							component={
								component
							}
							key={
								id
							}
						/>
					)
				)}
			</Switch>
			<BottomComponent />
		</>
	);
};

export default HomePresentations;
