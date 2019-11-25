import { ADMIN_URI } from 'routes';
import { IRoute } from 'interface';
import Loadable from 'react-loadable';
import Loading from 'shared/UiLoading';
import React from 'react';

export const DASHBOARD_MEMBERS_URI = `${ADMIN_URI}/members`;

const MemberListComponent = Loadable({
	loading: () => <Loading />,
	loader: () => import('../components/members')
});

export const adminNavRoutes: IRoute[] = [
	{
		id: Math.random(),
		name: 'Người dùng',
		uri: DASHBOARD_MEMBERS_URI,
		exact: true,
		component: MemberListComponent
	}
];

export default [...adminNavRoutes];
