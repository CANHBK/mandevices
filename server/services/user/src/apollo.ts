import { ApolloServer } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import { typeDefs, resolvers } from './graphql';
import { getDbConnection } from './database';
import { Db } from 'mongodb';

export interface ApolloContext {
	db: Db
}

const apolloServer = new ApolloServer({
	schema: buildFederatedSchema([
		{ typeDefs, resolvers: resolvers as any }
	]),
	playground: {
		settings: {}
	},
	context: async () => {
		const db = await getDbConnection();
		return { db };
	},
	introspection: true
});

export default apolloServer;
