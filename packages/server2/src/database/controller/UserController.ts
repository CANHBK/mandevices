import { generateToken } from "../../utilities";
import { dbClient } from "..";
import DataLoader from "dataloader";
import {groupBy} from 'lodash'

export const userLoader = () => {
	return new DataLoader<number, any[]>(userIds=>getUsersByIds(userIds))
}

const getUsersByIds = async (userIds: readonly number[]) => {
	try {
		const [result] = await dbClient.query(
			`
				SELECT *
				FROM user_account
				WHERE id IN (?)
			`,
			[userIds]
		)
		const usersGroupById = groupBy(result,'id')
		return userIds.map(userId=>usersGroupById[userId]||[])
	} catch (error) {
		throw new Error(error)
	}
}

interface UserAccountCreateInput {
	email: string;
	password: string;
	emailConfirmationToken: string;
	fullName: string;
}

interface UserAttributes extends UserAccountCreateInput {
	id: number;
}

const getSqlUpdate = assinmentList => {
	const assignments: any[] = [];
	const params: any[] = [];
	Object.keys(assinmentList).map(key => {
		assignments.push(`${key}=?`);
		params.push(assinmentList[key]);
	});
	return [assignments.join(","), params];
};

const getSelectionSet = (info: any) => {
	// console.log('info.schema :', info.schema);

	// console.log("info:", JSON.stringify(info, null, 8));
	const field = info.fieldNodes.filter(
		fieldNode => fieldNode.name.value == info.fieldName
	)[0];
	// console.log("info field:", JSON.stringify(field, null, 8));
	const selectionSet = field.selectionSet.selections.map(
		selection => selection.name.value
	);
	// console.log("info selection :", JSON.stringify(selectionSet, null, 8));
	return selectionSet;
};

const excludeField = ["firstName"];

export class UserAccountController {
	private static instance: UserAccountController;
	private constructor() {}
	static getInstance = (): UserAccountController => {
		if (!UserAccountController.instance) {
			UserAccountController.instance = new UserAccountController();
		}
		return UserAccountController.instance;
	};

	getAll = async (info: any) => {
		// const defaultSelector = ["id"];
		// ${[...defaultSelector, ...getSelectionSet(info)]}
		const [result] = await dbClient.query(`
			SELECT *
			FROM user_account;
		`);
		return result;
	};

	update = async (where: { id: string }, data: any, info: any) => {
		const [assignments, params] = getSqlUpdate(data);
		// ${[...getSelectionSet(info)]}
		try {
			await dbClient.query(
				`
			UPDATE user_account
			SET ${assignments}
			WHERE id = ?;
		`,
				[...params, where.id]
			);
			const [result] = await dbClient.query(
				`
				SELECT *
				FROM user_account
				WHERE id = ?;
			
			`,
				[where.id]
			);
			return result[0];
		} catch (error) {
			throw new Error(error);
		}
	};

	createToken = (id: string | number) => {
		return generateToken(id);
	};

	async create(userAccountCreateInput: UserAccountCreateInput) {
		const assignments: any[] = [];
		const params: any[] = [];
		Object.keys(userAccountCreateInput).map(key => {
			assignments.push(`${key}=?`);
			params.push(userAccountCreateInput[key]);
		});
		try {
			const result = await dbClient.query(
				`
		INSERT INTO user_account
		SET ${assignments.join(",")}
	`,
				params
			);
			return result;
		} catch (error) {
			throw new Error(error);
		}
	}
	getByEmail = async (
		email: string,
		...attrs: (keyof UserAttributes)[]
	) => {
		const defaultSelector = ["id"];
		// if (attrs !== undefined && attrs.length) {
		// 	for (let attr of attrs) {
		// 		selector = selector.concat(`, ${attr}`);
		// 	}
		// }
		// ${[...defaultSelector, ...attrs]}
		const [result] = await dbClient.query(
			`
			SELECT * FROM user_account WHERE email = ?
		
		`,
			[email]
		);

		return result[0];
	};
	getById = async (id: number) => {
		const defaultSelector = ["id"];
		// if (attrs !== undefined && attrs.length) {
		// 	for (let attr of attrs) {
		// 		selector = selector.concat(`, ${attr}`);
		// 	}
		// }

		const [result] = await dbClient.query(
			`
			SELECT *
			
			FROM user_account WHERE id = ?
		
		`,
			[id]
		);
		// ${[...defaultSelector, ...difference(getSelectionSet(info), excludeField)]}
		return result[0];
	};

	async setEmailConfirmed(email: string) {
		try {
			await dbClient.query(
				`
			UPDATE user_account
			SET emailConfirmationToken = ?
			WHERE email = ?;
	`,
				[null, email]
			);
			return true;
		} catch (error) {
			throw new Error(error);
		}
	}
}
