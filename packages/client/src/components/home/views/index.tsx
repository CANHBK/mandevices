import { Route, Switch } from 'react-router-dom';

import BottomComponent from '../components/footer';
import HeaderComponent from '../components/header';
import React from 'react';
import TopHeaderComponent from '../components/top-header';
import routes from '../routes';

const HomePresentations = () => {
	return (
		<>
			<TopHeaderComponent />
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
