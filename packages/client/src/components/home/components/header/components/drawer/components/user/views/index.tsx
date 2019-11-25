import { Avatar } from 'antd';
import React from 'react';
import bg from 'assets/bg-drawer.jpg';
import styled from 'styled-components/macro';

interface IUser {
	user?: {
		email: string;
		name: string;
	};
}
const UserPresentational: React.FC<IUser> = ({ user }) => {
	return (
		<UserArea>
			<Avatar icon="user" size="large" />
			{user && (
				<>
					<UserName>
						{
							user.name
						}
					</UserName>
					<UserEmail>
						{
							user.email
						}
					</UserEmail>
				</>
			)}
		</UserArea>
	);
};

export default UserPresentational;

const UserName = styled.div`
	color: white;
	font-size: 1rem;
	font-weight: 700;
	margin-top: 2rem;
`;
const UserEmail = styled.div`
	font-size: 1rem;
	color: white;
	margin-top: 1.25rem;
`;

const UserArea = styled.div`
	background-image: url(${bg});
	background-repeat: no-repeat;
	background-size: cover;
	height: 150px;
	padding-left: 1rem;
	padding-top: 2rem;
`;
