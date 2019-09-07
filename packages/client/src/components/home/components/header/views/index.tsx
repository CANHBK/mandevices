import React from 'react';
import { HeaderArea } from './ui';
import IconBrands from '../components/iconbrands'
import LogoMenu from '../components/logomenu'
import MenuStart from '../components/menustart'


const HeaderPresentations = () => {
	return (
		<HeaderArea>
            <LogoMenu/>
            <MenuStart/>
            <IconBrands/>
		</HeaderArea>
	);
};

export default HeaderPresentations;
