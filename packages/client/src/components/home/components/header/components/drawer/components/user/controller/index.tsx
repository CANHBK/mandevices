import React, { useEffect, useState } from 'react';

import UserPresentational from '../views';
import { useCurrentUserQuery } from 'generated/apollo-react-hook.generated';

const UserController = () => {
	const [user, setUser] = useState();

	/**
	 * Vì truy vấn đã có trong cache, nên phải thay đổi fetchPolicy
	 */
	const { data } = useCurrentUserQuery({
		fetchPolicy: 'network-only'
	});

	useEffect(() => {
		if (data && data.currentUser) {
			const {
				email,
				name
			} = data.currentUser.user!!;
			setUser({ email, name });
		}
	}, [data]);
	return <UserPresentational user={user} />;
};

export default UserController;
