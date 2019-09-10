import { IMemberCard } from 'components/home/components/members/controller';
import MemberCardPresentational from '../views';
import React from 'react';

const MemberCardController: React.FC<{ member: IMemberCard }> = ({
	member
}) => {
	return (
		<MemberCardPresentational
			member={member}
		></MemberCardPresentational>
	);
};

export default MemberCardController;
