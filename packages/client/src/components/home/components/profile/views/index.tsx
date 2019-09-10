import { ProfileArea, ProfileMain } from './styled';
import { Route, Switch } from 'react-router-dom';

import NavigationComponent from '../components/navigations';
import PersonalComponent from '../components/personals';
import React from 'react';
import { navRoutes } from '../routes';

const ProfilePresentational = () => {
	return (
		<ProfileArea>
			<PersonalComponent />
			<ProfileMain>
				<NavigationComponent />
				<Switch>
					{navRoutes.map(
						({
							id,
							exact,
							component
						}) => (
							<Route
								key={
									id
								}
								exact={
									exact
								}
								component={
									component
								}
							/>
						)
					)}
				</Switch>
			</ProfileMain>
		</ProfileArea>
	);
};

export default ProfilePresentational;
