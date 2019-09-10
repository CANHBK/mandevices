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

export const MEMBERS_URI = '/members';

export const navRoutes: IRoute[] = [
	{
		id: Math.random(),
		name: 'Thành viên',
		uri: MEMBERS_URI,
		component: MembersComponent
	},
	{
		id: Math.random(),
		name: 'Trang chủ',
		uri: '/',
		component: HomePageComponent
	},
	{
		id: Math.random(),
		name: 'Community',
		uri: '/',
		component: () => <div>abc</div>
	},
	{
		id: Math.random(),
		name: 'Videos',
		uri: '/',
		component: () => <div>abc</div>
	},
	{
		id: Math.random(),
		name: 'Games',
		uri: '/',
		component: () => <div>abc</div>
	}
];

export default [...navRoutes]
