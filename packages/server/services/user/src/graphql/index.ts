import { gql } from 'apollo-server-express';
import { Resolvers } from '../generated/graphql';

export const typeDefs = gql`
	type Query {
		hello: String
		users: [User!]!
	}

	type User @key(fields: "_id") {
		_id: ID!
		firstName: String!
		lastName: String!
		fullName: String
	}
`;

export const resolvers: Resolvers = {
	Query: {
		hello: () => 'Nguyễn Viết Cảnh',
		users: (_, __, { db }) => {
			const result = db
				.collection('users')
				.find({})
				.toArray();
			return result;
		}
	},
	User: {
		// @ts-ignore
		__resolveReference(user, { fetchUserById }) {
			return fetchUserById(user._id);
		},
		// @ts-ignore
		fullName: user => `${user.lastName} ${user.firstName}`
	}
};
