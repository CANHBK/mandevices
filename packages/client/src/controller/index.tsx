import React, { useEffect } from "react";

import AppPresentations from "../views";
import { TOKEN } from "App";
import UiLoading from "shared/UiLoading";
import routes from "../routes";
import { useApolloClient } from "@apollo/react-hooks";
import { useCurrentUserQuery } from "generated/apollo-react-hook.generated";

const AppController = () => {
	const { data } = useCurrentUserQuery();
	const apolloClient = useApolloClient();

	useEffect(() => {
		if (data && data.currentUser && data.currentUser.token) {
			localStorage.setItem(TOKEN, data.currentUser.token);
			apolloClient.writeData({
				data: { isLogin: true }
			});
		}
	});

	// Load Google Client
	useEffect(() => {
		gapi.load("auth2", function() {
			gapi.auth2.init({
				client_id:
					"428731434528-fove4ieqeopgpa4ttithvp43ounan8df.apps.googleusercontent.com"
			});
		});
	});

	return (
		<>{gapi.auth2 ? <AppPresentations routes={routes} /> : <UiLoading />}</>
	);
};

export default AppController;
