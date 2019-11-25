import React, { useEffect, useState } from 'react';

import MembersPresentational from '../views';
import { useUsersQuery } from 'generated/apollo-react-hook.generated';

const MembersController = () => {
	const [users, setUsers] = useState<
		{ id: string; name: string }[]
	>();
	const { loading, data } = useUsersQuery();

	useEffect(() => {
		if (data && data.users) {
			setUsers(data.users);
		}
	}, [data]);

	return <MembersPresentational users={users} loading={loading}/>;
};

export default MembersController;
