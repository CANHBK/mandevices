import { IRoute } from '../../../../../interface';
import React from 'react';

export const navRoutes: IRoute[] = [
	{
		id: Math.random(),
		name: 'Trang chủ',
		uri: '/',
		component: () => <div>abc</div>
	},
	{
		id: Math.random(),
		name: 'Thành viên',
		uri: '/',
		component: () => <div>abc</div>
	},
	
]; 
