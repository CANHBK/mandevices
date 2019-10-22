import { RouteComponentProps, withRouter } from 'react-router';

import { HOME_URI } from 'routes';
import { IRoute } from '../../../../../interface';
import IconBrands from '../components/iconbrands';
import Menu from '../components/menu';
import React from 'react';
import logo from 'assets/logo.png';
import styled from 'styled-components/macro';

const HeaderArea = styled.header`
	margin: 2em auto;
	width: 80%;
	display: flex;
	align-items: center;
`;

interface IHeaderProps extends RouteComponentProps {
	routes: IRoute[];
}

const HeaderPresentations: React.FC<IHeaderProps> = ({ routes, history }) => {
	const onLogoClick = () => {
		history.push(HOME_URI);
	};

	return (
		<HeaderArea>
			<img
				onClick={onLogoClick}
				src={logo}
				alt="Mandevices"
				style={{ width: '180px' }}
			/>
			<Menu routes={routes} />
			<IconBrands />
		</HeaderArea>
	);
};

export default withRouter(HeaderPresentations);
