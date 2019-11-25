import { DrawerArea } from 'shared/Drawer';
import DrawerComponent from '../components/drawer';
import { Header } from 'shared/Header';
import { HeaderLogo } from 'shared/Logo';
import { IRoute } from '../../../../../interface';
import Menu from '../components/menu';
import React from 'react';
import { device } from 'theme';
import styled from 'styled-components/macro';

interface IHeaderProps {
	routes: IRoute[];
	onLogoClick: () => void;
}

const HeaderPresentations: React.FC<IHeaderProps> = ({
	routes,
	onLogoClick
}) => {
	return (
		<Header>
			<DrawerArea>
				<DrawerComponent />
			</DrawerArea>
			<HeaderLogo onClick={onLogoClick} />
			<MainMenu>
				<Menu routes={routes} />
			</MainMenu>
		</Header>
	);
};

export default HeaderPresentations;


const MainMenu = styled.nav`
	flex: 5;
	display: none;
	@media ${device.laptop} {
		display: block;
	}
`;