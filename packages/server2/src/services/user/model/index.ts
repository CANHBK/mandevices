import { Field, ObjectType } from 'type-graphql';

import { dbConnect } from '../../../database';

export interface IUser {
	name: string;
	email: string;
	password: string;
	course: number;
}

@ObjectType()
export class User {
	@Field()
	name: string;
	@Field()
	email: string;
	@Field()
	password: string;
	@Field()
	course: number;

	constructor(user: IUser) {
		const { name, email, password, course } = user;
		this.name = name;
		this.email = email;
		this.password = password;
		this.course = course;
	}

	async create() {
		const db = await dbConnect();
		try {
			const result = await db
				.collection<IUser>('users')
				.insertOne({
					name: this.name,
					email: this.email,
					password: this
						.password,
					course: this.course
				});
			return result.ops[0];
		} catch (error) {
			console.log('error', error);
		}
	}
}
