import React, { useEffect, useState } from 'react';
import { Roles, useCurrentUserQuery } from 'generated/apollo-react-hook.generated';

import AdminPresentational from '../views';
import Can from 'components/Can';
import { HOME_URI } from 'routes';
import { Redirect } from 'react-router';

const AdminController = () => {
	const { data } = useCurrentUserQuery();
	const [roles, setRoles] = useState<Roles[]>();

	useEffect(() => {
		if (data && data.currentUser) {
			setRoles(data.currentUser.user!!.roles);
		}
	}, [data]);
	return (
		<>
			<Can
				role="admin"
				perform="dashboard-page:visit"
				yes={() => (
					<AdminPresentational />
				)}
				no={() => (
					<Redirect
						to={
							HOME_URI
						}
					/>
				)}
			/>
		</>
	);
};

export default AdminController;
