import gql from "graphql-tag";

gql`
	query IsLogin{
		isLogin @client
	}
	query CurrentUser{
		currentUser{
			token
		}
	}
	mutation LogOut{
		logout @client
	}
`