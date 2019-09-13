import { RouteComponentProps, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRoute } from '../../../../../../../../interface';
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
	return (
		<MenuStart>
			<ul>
				<li>
					<FontAwesomeIcon
						icon={
							faHome
						}
					/>
				</li>
				{routes.map(route => (
					<li
						onClick={() => {
							history.push(
								'/members'
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
