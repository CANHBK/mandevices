import { Redirect, Route, Switch } from 'react-router-dom';
import routes, { DASHBOARD_MEMBERS_URI } from '../routes';

import HeaderComponent from '../components/header';
import React from 'react';
import styled from 'styled-components';

const AdminPresentational = () => {
	return (
		<AdminPage>
			<HeaderComponent />
			<Switch>
				{routes.map(route => (
					<Route
						key={
							route.id
						}
						path={
							route.uri
						}
						component={
							route.component
						}
					/>
				))}
				<Redirect
					to={
						DASHBOARD_MEMBERS_URI
					}
				/>
			</Switch>
		</AdminPage>
	);
};

export default AdminPresentational;

const AdminPage = styled.div`
	background-color: ${props => props.theme.color.backgroundColor};
	height: 100%;
`;
