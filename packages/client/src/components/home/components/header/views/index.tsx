import React from 'react';
import { IRoute } from '../../../../../interface';
import { HeaderArea } from './ui';
import { LogoMenu } from '../views/ui';
import { MenuStart } from '../views/ui';
import { IconBrands } from '../views/ui';
import imglogo from '../asset/firefox_logos.0.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

interface IHeaderPresentations {
	routes: IRoute[];
}
const HeaderPresentations: React.FC<IHeaderPresentations> = ({ routes }) => {
	return (
		<HeaderArea>
			<LogoMenu>
				<div>
					<img
						src={
							imglogo
						}
					/>
					<span>Fifox</span>
				</div>
			</LogoMenu>
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
			<IconBrands>
				<ul>
					<li>
						<FontAwesomeIcon
							icon={
								faFacebook
							}
						/>
					</li>
					<li>
						<FontAwesomeIcon
							icon={
								faTwitter
							}
						/>
					</li>
					<li>
						<FontAwesomeIcon
							icon={
								faEnvelope
							}
						/>
					</li>
					<li>
						<FontAwesomeIcon
							icon={
								faHeadphones
							}
						/>
					</li>
				</ul>
			</IconBrands>
		</HeaderArea>
	);
};

export default HeaderPresentations;
