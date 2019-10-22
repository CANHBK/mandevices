import { IRoute } from '../interface';
import Loadable from 'react-loadable';
import React from 'react';
import UiLoading from 'shared/UiLoading';

const AuthComponent = Loadable({
	loader: () => import('../components/auth'),
	loading: () => <UiLoading />
});
const HomeComponent = Loadable({
	loader: () => import('../components/home'),
	loading: () => <UiLoading />
});

export const AUTH_URI = `/auth`;
export const HOME_URI = `/`;

const routes: IRoute[] = [
	{
		id: Math.random(),
		uri: AUTH_URI,
		exact: false,
		component: AuthComponent
	},
	{
		id: Math.random(),
		uri: HOME_URI,
		exact: false,
		component: HomeComponent
	}
];

export default routes;
