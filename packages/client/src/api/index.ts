import gql from 'graphql-tag';

gql`
	query IsLogin {
		isLogin @client
	}
	query CurrentUser {
		currentUser {
			token
			user {
				id
				name
				email
				roles
			}
		}
	}
	query Users {
		users {
			id
			name
		}
	}
	mutation LogOut {
		logout @client
	}
`;
