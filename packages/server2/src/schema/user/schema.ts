import { gql } from 'apollo-server-express';

export default gql`
	type User {
		id: ID
		name: String
		email: String
		avatar: String
	}

	type AuthenticationInfo {
		token: String
		user: User
	}

	type Mutation {
		register(
			name: String!
			email: String!
			password: String!
			course: Int!
		): Boolean
		login(email:String!, password: String!):AuthenticationInfo
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
