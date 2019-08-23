import { ApolloServer, gql } from 'apollo-server-express';
import { buildFederatedSchema } from '@apollo/federation';
import express from 'express';
import { Resolvers } from './generated/graphql.generated';

const port = process.env.PORT;
const app = express();

const typeDefs = gql`
	type Query {
		posts: [Post!]!
	}
	type Post @key(fields: "id") {
		id: ID!
		title: String
	}
`;

const resolvers: Resolvers = {
	Query: {
		posts: () => {
			return [
				{
					id: 'abc',
					title: 'Sach'
				}
			];
		}
	},
	Post: {
		// @ts-ignore
		__resolveReference(post, { fetchPostById }) {
			return fetchPostById(post.id);
		}
	}
};

const server = new ApolloServer({
	schema: buildFederatedSchema([
		{ typeDefs, resolvers: resolvers as any }
	]),
	introspection: true
});

server.applyMiddleware({ app });

app.listen({ port }, () => {
	console.log(`Sevice Post ready on port ${port}`);
});
