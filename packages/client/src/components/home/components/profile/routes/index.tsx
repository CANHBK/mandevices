import HomeComponent from '../components/home-page';
import { IRoute } from 'interface';
import { PROFILE_URI } from 'components/home/routes';

const PROFILE_HOME_URI = `${PROFILE_URI}/home`;

export const navRoutes: IRoute[] = [
	{
		id: Math.random(),
		uri: PROFILE_HOME_URI,
		component: HomeComponent
	}
];
