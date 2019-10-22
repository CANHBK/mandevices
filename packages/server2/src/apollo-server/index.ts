import { ApolloServer } from 'apollo-server-express';
import { dbConnect } from '../database';
import { schema } from '../schema';

export const getApolloServer = async () => {
	const dbClient = await dbConnect();

	return new ApolloServer({
		schema,
		playground: true,
		introspection: true,
		context: request => {
			return {
				dbClient,
				token:
					request.req.headers
						.authorization
			};
		}
	});
};
