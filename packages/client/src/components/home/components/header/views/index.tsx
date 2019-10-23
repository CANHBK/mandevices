import DrawerComponent from '../components/drawer';
import { IRoute } from '../../../../../interface';
import Menu from '../components/menu';
import React from 'react';
import { device } from 'theme';
import logo from 'assets/logo.png';
import styled from 'styled-components/macro';

interface IHeaderProps {
	routes: IRoute[];
	onLogoClick: ()=>void;
}

const HeaderPresentations: React.FC<IHeaderProps> = ({ routes,onLogoClick }) => {
	return (
		<Header>
			<DrawerAreaa>
				<DrawerComponent />
			</DrawerAreaa>
			<Logo onClick={onLogoClick}/>
			<MainMenu>
				<Menu routes={routes} />
			</MainMenu>
		</Header>
	);
};

export default HeaderPresentations;

const DrawerAreaa = styled.div`
	position: absolute;
	left: 16px;
	@media ${device.laptop} {
		display: none;
	}
`;
const Logo = styled.div`
	background-image: url(${logo});
	background-size: contain;
	background-repeat: no-repeat;
	flex: 1;
	align-self: stretch;
	padding: 5px 20px;
	background-origin: content-box;
	background-position: center;
`;

const Header = styled.header`
	position: relative;
	max-width: 100%;
	display: flex;
	align-items: center;
	min-height: 56px;
	box-shadow: 0 2px 8px #f0f1f2;
`;

const MainMenu = styled.nav`
	flex: 5;
	display: none;
	@media ${device.laptop} {
		display: block;
	}
`;
