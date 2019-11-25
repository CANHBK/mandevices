import { RouteComponentProps, withRouter } from "react-router-dom";

import { AUTH_URI } from "routes";
import { REGISTER_URI } from "components/auth/routes";
import React from "react";
import { TOKEN } from "App";
import TopHeaderPresentational from "../views";
import { useApolloClient } from "@apollo/react-hooks";
import { useIsLoginQuery } from "generated/apollo-react-hook.generated";

const TopHeaderController: React.FC<RouteComponentProps> = ({ history }) => {
	const { data } = useIsLoginQuery();
	const apolloClient = useApolloClient();
	const handleLogout = () => {
		if(gapi.auth2.getAuthInstance().isSignedIn.get()){
			gapi.auth2.getAuthInstance().signOut();
		}
		localStorage.removeItem(TOKEN);
		apolloClient.resetStore();
	};

	return (
		<TopHeaderPresentational
			onRegisterClick={() => history.push(REGISTER_URI)}
			onLogoutClick={handleLogout}
			isLogin={
				(data && data.isLogin) || gapi.auth2.getAuthInstance().isSignedIn.get()
					? true
					: false
			}
			onLoginClick={() => {
				history.push(AUTH_URI);
			}}
		/>
	);
};

export default withRouter(TopHeaderController);
