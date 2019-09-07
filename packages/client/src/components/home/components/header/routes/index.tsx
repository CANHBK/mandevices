import { IRoute } from '../../../../../interface';
import React from 'react';

export const navRoutes: IRoute[] = [
	{
		id: Math.random(),
		name: 'News',
		uri: '/',
		component: () => <div>abc</div>
	},
	{
		id: Math.random(),
		name: 'Esport',
		uri: '/',
		component: () => <div>abc</div>
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
