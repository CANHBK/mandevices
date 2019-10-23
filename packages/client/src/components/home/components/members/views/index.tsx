import Container from 'shared/Container';
import { IMemberCard } from '../controller';
import MememberCardComponent from './components/member-card';
import React from 'react';
import { device } from 'theme';
import styled from 'styled-components/macro';

const MembersPresentational: React.FC<{ members: IMemberCard[] }> = ({
	members
}) => {
	return (
		<MemberPage>
			danh sach thanh vien
			<MemberLists>
				{members.map(member => (
					<MememberCardComponent
						key={
							member.id
						}
						member={
							member
						}
					/>
				))}
			</MemberLists>
		</MemberPage>
	);
};

export default MembersPresentational;

const MemberPage = styled.div`
	@media ${device.laptop} {
		width: 80%;
		margin: auto;
	}
`;

const MemberLists = styled.div`
	display: grid;
	@media ${device.tablet} {
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${device.laptop} {
		grid-template-columns: repeat(3, 1fr);
	}
`;
