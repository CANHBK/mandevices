import { Route, Switch } from 'react-router-dom';

import GlobalStyled from './styled';
import { IRoute } from '../interface';
import React from 'react';

interface IAppPresentations {
	routes: IRoute[];
}

const AppPresentations: React.FC<IAppPresentations> = ({ routes }) => {
	return (
		<>
			<GlobalStyled />
			<Switch>
				{routes.map(
					({
						id,
						uri,
						exact,
						component
					}) => (
						<Route
							key={
								id
							}
							path={
								uri
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
		</>
	);
};

export default AppPresentations;
