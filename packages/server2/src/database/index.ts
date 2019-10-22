import assert from 'assert';
import mongodb from 'mongodb';
import { seed } from './seed';

const MongoClient = mongodb.MongoClient;

const url = process.env.DATABASE_CONNECTION_STRING!;

const dbName = 'mandevices';

const client = new MongoClient(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

export const dbConnect = (): Promise<mongodb.Db> => {
	return new Promise(resolve => {
		client.connect(err => {
			assert.strictEqual(null, err);
			const dbo = client.db(dbName);
			resolve(dbo);
		});
	});
};

// seed()
// if (process.env.NODE_ENV === 'development') {
// 	const seed = require('./seed');
// 	try {
// 		seed.default();
// 	} catch (error) {
// 		console.log('error', error);
// 	}
// }
