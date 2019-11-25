import { gql } from "apollo-server-express";

export default gql`
	enum Roles {
		user
	}
	type User {
		id: ID!
		fullName: String!
		email: String
		avatar: String
		roles: [Roles!]!
	}

	type AuthenticationInfo {
		token: String
	}

	type Mutation {
		register(
			name: String!
			email: String!
			password: String!
			course: Int!
		): Boolean
		login(email: String!, password: String!): AuthenticationInfo
		facebookLogin(
			email: String!
			name: String!
			avatar: String!
		): AuthenticationInfo
	}
	type Query {
		users: [User!]!
		currentUser: AuthenticationInfo
	}
`;
