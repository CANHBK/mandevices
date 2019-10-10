import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type User {
		id: ID
		name: String
		email: String
	}
	type Mutation {
		register(
			name: String!
			email: String!
			password: String!
			course: Int!
		): User
	}
	type Query {
		users: [User!]!
	}
`;

