const adminStaticAction = ['dashboard-page:visit'] as const;

 type IAdminStaticAction = typeof adminStaticAction[number];
 export type IAction = IAdminStaticAction

const rules = {
	admin: {
		static: adminStaticAction,
		dynamic: []
	}
};
export default rules;
