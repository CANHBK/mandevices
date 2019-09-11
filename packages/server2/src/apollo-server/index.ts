import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import resolvers from '../services';

export const getApolloServer = async () => {
	const schema = await buildSchema({
		resolvers
	});

	return new ApolloServer({ schema });
};
