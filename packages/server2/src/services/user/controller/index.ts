import {
	Query,
	Resolver,
	FieldResolver,
	Root,
	Mutation,
	Arg,
	Ctx
} from 'type-graphql';

import { User } from '../model';
import { dbConnect } from '../../../database';
import bcrypt from 'bcryptjs';

@Resolver(User)
export default class UserResolver {
	// @FieldResolver()
	// async name(@Root() parent: User) {
	// 	return `${parent.firstName} ${parent.lastName}`;
	// }

	@Mutation(() => User)
	async register(
		@Arg('name') name: string,
		@Arg('email') email: string,
		@Arg('password') password: string,
		@Arg('course') course: number
	) {
		const hashPassword = await bcrypt.hash(password, 12);

		const user = new User({
			name,
			email,
			password: hashPassword,
			course
		});
		return user.create();
	}

	@Query(() => [User])
	async users(@Ctx() ctx: any): Promise<User[]> {
		console.log('ctx', ctx);
		const db = await dbConnect();
		return db
			.collection('users')
			.find({})
			.toArray();
	}
}
