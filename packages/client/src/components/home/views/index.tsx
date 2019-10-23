import { Route, Switch } from 'react-router-dom';

import BottomComponent from '../components/footer';
import HeaderComponent from '../components/header';
import React from 'react';
import TopHeaderComponent from '../components/top-header';
import { device } from 'theme';
import routes from '../routes';
import styled from 'styled-components';

const HomePresentations = () => {
	return (
		<>
			<TopHeader>
				<TopHeaderComponent />
			</TopHeader>
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

const TopHeader = styled.div`
	display: none;
	@media ${device.laptop} {
		display: block;
	}
`;
