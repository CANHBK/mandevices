import React from 'react';
import { MenuStart } from './ui';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { IRoute } from '../../../../../../../interface';

interface IHeaderPresentations {
	routes: IRoute[];
}
const MenuStartPresentations: React.FC<IHeaderPresentations> = ({ routes })=> {
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
					{routes.map(
						route => (
							<li>
								{
									route.name
								}
							</li>
						)
					)}
				</ul>
			</MenuStart>
	);
};
export default MenuStartPresentations;
