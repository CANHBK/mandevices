import { Avatar, Card } from 'antd';

import React from 'react';

const { Meta } = Card;

interface IMembers {
	users?: { id: string; name: string }[];
	loading?: boolean;
}

const MembersPresentational: React.FC<IMembers> = ({ users, loading }) => {
	return (
		<>
			{users &&
				users.map(user => (
					<Card
						key={
							user.id
						}
						loading={
							loading
						}
					>
						<Meta
							title={
								user.name
							}
							avatar={
								<Avatar />
							}
						/>
					</Card>
				))}
		</>
	);
};

export default MembersPresentational;
