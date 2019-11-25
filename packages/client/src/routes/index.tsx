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
const AdminComponent = Loadable({
	loader: () => import('../components/admin'),
	loading: () => <UiLoading />
});

export const AUTH_URI = `/auth`;
export const HOME_URI = `/`;
export const ADMIN_URI = `/admin`;

const routes: IRoute[] = [
	{
		id: Math.random(),
		uri: AUTH_URI,
		exact: false,
		component: AuthComponent
	},
	{
		id: Math.random(),
		uri: ADMIN_URI,
		exact: false,
		component: AdminComponent
	},
	{
		id: Math.random(),
		uri: HOME_URI,
		exact: false,
		component: HomeComponent
	}
];

export default routes;
