import { AUTH_URI } from 'routes';
import { IRoute } from 'interface';
import Loadable from 'react-loadable';
import LoginComponent from '../components/login';
import React from 'react';
import UiLoading from 'shared/UiLoading';

const RegisterComponent = Loadable({
	loader: () => import('../components/register'),
	loading: () => <UiLoading />
});

export const LOGIN_URI = `${AUTH_URI}/login`;
export const REGISTER_URI = `${AUTH_URI}/register`;

const routes: IRoute[] = [
	{
		id: 1,
		uri: LOGIN_URI,
		exact: true,
		component: LoginComponent
	},
	{
		id: 4,
		uri: REGISTER_URI,
		exact: false,
		component: RegisterComponent
	}
];

const authRoutes = [...routes];

export default authRoutes;
