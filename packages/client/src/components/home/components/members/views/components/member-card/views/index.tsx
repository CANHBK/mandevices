import { IMemberCard } from 'components/home/components/members/controller';
import { MemberCard } from './styled';
import React from 'react';

const MemberCardPresentational: React.FC<{ member: IMemberCard }> = ({
	member
}) => {
	return (
		<MemberCard>
			<div>{member.name}</div>
			<div>{member.course}</div>
		</MemberCard>
	);
};

export default MemberCardPresentational;
