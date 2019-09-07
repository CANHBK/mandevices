import HomeComponent from '../components/home';
import { IRoute } from '../interface';

const routes: IRoute[] = [
	{
		id: Math.random(),
		uri: '/',
		component: HomeComponent
	}
];

export default routes