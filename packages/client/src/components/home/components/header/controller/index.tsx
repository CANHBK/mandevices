import HeaderPresentation from '../views';
import React from 'react';
import routes from '../../../routes';

const HeaderController = () => {
	return <HeaderPresentation routes={routes}></HeaderPresentation>;
};
export default HeaderController;
