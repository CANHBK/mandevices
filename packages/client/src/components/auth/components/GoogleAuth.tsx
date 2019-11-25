import React, { useEffect } from "react";
import { RouteComponentProps, withRouter } from "react-router";

import { Button } from "antd";

const C: React.FC<RouteComponentProps> = ({ history }) => {
	// const gapi = window.gapi;
	useEffect(() => {
		gapi.load("auth2", function() {
			const googleAuth = gapi.auth2.init({
				client_id:
					"428731434528-fove4ieqeopgpa4ttithvp43ounan8df.apps.googleusercontent.com"
			});

			// .then(() => {
			// 	console.log("windown", gapi.auth2);
			// })

			// .catch(error => console.log("error", error));
			if (googleAuth.isSignedIn.get()) {
				history.push("/");
			}
		});

		// gapi.load("signin2", function() {});
	});

	const googleSigin = async () => {
		const googleUser = await gapi.auth2.getAuthInstance().signIn();
		var profile = googleUser.getBasicProfile();
		console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
	};

	function onSignIn(googleUser: any) {
		var profile = googleUser.getBasicProfile();
		console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
		console.log("Name: " + profile.getName());
		console.log("Image URL: " + profile.getImageUrl());
		console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
	}

	return (
		<>
			<Button icon="google" onClick={googleSigin}>
				Đăng nhập bằng Google
			</Button>
		</>
	);
};

export const GoogleAuth = withRouter(C);
