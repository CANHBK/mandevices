import { HeaderArea } from './ui';
import { IRoute } from '../../../../../interface';
import IconBrands from '../components/iconbrands';
import LogoMenu from '../components/logomenu';
import MenuStart from './ui/menustart';
import React from 'react';

const HeaderPresentations: React.FC<{ routes: IRoute[] }> = ({ routes }) => {
	return (
		<HeaderArea>
			<LogoMenu />
			<MenuStart routes={routes} />
			<IconBrands />
		</HeaderArea>
	);
};

export default HeaderPresentations;
