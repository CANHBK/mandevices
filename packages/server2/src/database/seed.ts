import { dbConnect } from '.';
import faker from 'faker/locale/vi';

const users: User[] = [];

for (let i = 0; i < 20; i++) {
	const user: User = {
		name:
			faker.name.findName() +
			' ' +
			faker.name.lastName(),

		email: faker.internet.email()
	};

	users.push(user);
}

interface User {
	name: String;
	email: String;
}

export default async () => {
	const db = await dbConnect();

	const hasDocuments = await db.collection('users').countDocuments();
	if (hasDocuments || !users.length) {
		return;
	}

	await db.collection('users').insertMany(users);
};
