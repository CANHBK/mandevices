import { IRoute } from '../../../interface';
import Loadable from 'react-loadable';
import React from 'react';
import UiLoading from '../../../shared/UiLoading';

const MembersComponent = Loadable({
	loader: () => import('../components/members'),
	loading: () => <UiLoading />
});
const HomePageComponent = Loadable({
	loader: () => import('../components/home-page'),
	loading: () => <UiLoading />
});

const ProfileComponent = Loadable({
	loader: () => import('../components/profile'),
	loading: () => <UiLoading />
});

export const MEMBERS_URI = '/members';

export const PROFILE_URI = '/members/profile/:id';

export const navRoutes: IRoute[] = [
	{
		id: Math.random(),
		name: 'Thành viên',
		exact: true,
		uri: MEMBERS_URI,
		component: MembersComponent
	},
	{
		id: Math.random(),
		name: 'Trang chủ',
		uri: '/',
		exact: true,
		component: HomePageComponent
	}
];

const routes: IRoute[] = [
	{
		id: Math.random(),
		name: 'Trang cá nhân',
		uri: PROFILE_URI,
		component: ProfileComponent
	}
];

export default [...navRoutes, ...routes];
