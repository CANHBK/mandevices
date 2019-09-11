import { Query, Resolver, FieldResolver, Root, Mutation } from 'type-graphql';

import { User } from '../model';
import { getDbConnection } from '../../../database';

@Resolver(User)
export default class UserResolver {
	@FieldResolver()
	async name(@Root() parent: User) {
		return `${parent.firstName} ${parent.lastName}`;
	}
	@Query(() => [User])
	async users(): Promise<User[]> {
		const db = await getDbConnection();
		return db
			.collection('users')
			.find({})
			.toArray();
	}
}
