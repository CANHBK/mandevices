import rules, { IAction } from '../rbac-rules';

type IRules = typeof rules;

type IRole = keyof (typeof rules);

const check = (rules: IRules, role: IRole, action: IAction, data: any) => {
	const permissions = rules[role];
	if (!permissions) {
		// role is not present in the rules
		return false;
	}

	const staticPermissions = permissions.static;

	if (staticPermissions && staticPermissions.includes(action)) {
		// static rule not provided for action
		return true;
	}

	const dynamicPermissions = permissions.dynamic;

	// if (dynamicPermissions) {
	// 	const permissionCondition = dynamicPermissions[action];
	// 	if (!permissionCondition) {
	// 		// dynamic rule not provided for action
	// 		return false;
	// 	}

	// 	return permissionCondition(data);
	// }
	return false;
};

interface ICan {
	role: IRole;
	perform: any;
	data?: any;
	yes: () => any;
	no?: () => any;
}
const Can: React.FC<ICan> = ({ role, perform, data, no, yes }) => {
	return check(rules, role, perform, data) ? yes() : no ? no() : null;
};

interface Length {}

const identity: <T>(arg: T) => T = (arg) => {
	return arg;
};

console.log('identity(5)', identity(5))

export default Can;
