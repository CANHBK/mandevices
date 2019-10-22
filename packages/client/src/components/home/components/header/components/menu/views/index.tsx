import { RouteComponentProps, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HOME_URI } from 'routes';
import { IRoute } from '../../../../../../../interface';
import { MenuStart } from './ui';
import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';

interface IHeaderPresentations extends RouteComponentProps {
	routes: IRoute[];
}
const MenuStartPresentations: React.FC<IHeaderPresentations> = ({
	routes,
	history
}) => {
	const onHomeClick = () => {
		history.push(HOME_URI);
	};

	return (
		<MenuStart>
			<ul>
				<li onClick={onHomeClick}>
					<FontAwesomeIcon
						icon={
							faHome
						}
					/>
				</li>
				{routes.map(route => (
					<li
						key={
							route.id
						}
						onClick={() => {
							history.push(
								route.uri
							);
						}}
					>
						{
							route.name
						}
					</li>
				))}
			</ul>
		</MenuStart>
	);
};
export default withRouter(MenuStartPresentations);
