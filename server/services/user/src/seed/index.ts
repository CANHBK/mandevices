import faker from 'faker/locale/vi';
import { getDbConnection } from '../database';

interface User {
	firstName: String;
	lastName: String;
	email: String;
}

const users: User[] = [];

const seed = async () => {
	const db = await getDbConnection();

	const hasDocuments = await db.collection('users').countDocuments();
	if (hasDocuments) {
		return;
	}
	for (let i = 0; i < 100; i++) {
		const user: User = {
			firstName: faker.name.findName(),
			lastName: faker.name.lastName(),
			email: faker.internet.email()
		};

		users.push(user);
	}

	db.collection('users').insertMany(users);

	console.log('users', JSON.stringify(users, null, 2));
};

seed();
