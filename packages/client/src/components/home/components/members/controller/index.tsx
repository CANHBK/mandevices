import MembersPresentational from '../views';
import React from 'react';
import faker from 'faker';

faker.locale = 'vi';

export interface IMemberCard {
	id: number;
	name: string;
	course: number;
	avatar: string;
}
const fakeDatas: IMemberCard[] = [];
for (let i = 0; i < 50; i++) {
	const fakeData: IMemberCard = {
		id: Math.random(),
		name: faker.name.findName(),
		course: Math.floor(Math.random() * (65 - 53 + 1) + 53),
		avatar: faker.image.imageUrl()
	};
	fakeDatas.push(fakeData);
}

const MemembersController = () => {
	return (
		<MembersPresentational
			members={fakeDatas}
		></MembersPresentational>
	);
};

export default MemembersController;
