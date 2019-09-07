import AppPresentations from '../views';
import React from 'react';
import routes from '../routes';

const AppController = () => {
	return <AppPresentations routes={routes}></AppPresentations>;
};

export default AppController;
