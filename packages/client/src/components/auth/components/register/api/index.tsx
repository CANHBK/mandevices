import gql from 'graphql-tag';

gql`
	mutation Register(
		$name: String!
		$email: String!
		$password: String!
		$course: Int!
	) {
		register(
			name: $name
			email: $email
			password: $password
			course: $course
		)
	}
`;
