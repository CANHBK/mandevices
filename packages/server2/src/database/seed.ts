import faker from 'faker/locale/vi';
import { getDbConnection } from '.';

const users: User[] = [];

for (let i = 0; i < 100; i++) {
	const user: User = {
		firstName: faker.name.findName(),
		lastName: faker.name.lastName(),
		email: faker.internet.email()
	};

	users.push(user);
}

interface User {
	firstName: String;
	lastName: String;
	email: String;
}

export default async () => {
	const db = await getDbConnection();

	const hasDocuments = await db.collection('users').countDocuments();
	if (hasDocuments || !users.length) {
		return;
	}

	db.collection('users').insertMany(users);
};
