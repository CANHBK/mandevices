import { getDbConnection } from '../database';

const users: User[] = [];
if (process.env.NODE_ENV == 'development') {
	const faker = require('faker/locale/vi');
	for (let i = 0; i < 100; i++) {
		const user: User = {
			firstName: faker.name.findName(),
			lastName: faker.name.lastName(),
			email: faker.internet.email()
		};

		users.push(user);
	}
}

interface User {
	firstName: String;
	lastName: String;
	email: String;
}

const seed = async () => {
	const db = await getDbConnection();

	const hasDocuments = await db.collection('users').countDocuments();
	if (hasDocuments || !users.length) {
		return;
	}

	db.collection('users').insertMany(users);

	console.log('users', JSON.stringify(users, null, 2));
};

seed();
