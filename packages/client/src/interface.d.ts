export interface IRoute {
	id: string | number;
	name?: string;
	exact?: boolean;
	icon?: IconProp;
	uri: string;
	component: RouteProps['component'];
}
