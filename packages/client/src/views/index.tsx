import GlobalStyled from './styled';
import { IRoute } from '../interface';
import React from 'react';
import { Route } from 'react-router-dom';

interface IAppPresentations {
	routes: IRoute[];
}

const AppPresentations: React.FC<IAppPresentations> = ({ routes }) => {
	return (
		<React.Fragment>
			<GlobalStyled />
			{routes.map(
				({
					id,
					uri,
					exact,
					component
				}) => (
					<Route
						key={id}
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
		</React.Fragment>
	);
};

export default AppPresentations;
