import assert from 'assert';
import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

const url = process.env.DATABASE_CONNECTION_STRING!;

const dbName = 'mandevices';

const client = new MongoClient(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

export const getDbConnection = (): Promise<mongodb.Db> => {
	return new Promise(resolve => {
		client.connect(err => {
			assert.strictEqual(null, err);
			const dbo = client.db(dbName);
			resolve(dbo);
		});
	});
};

if (process.env.NODE_ENV === 'development') {
	const seed = require('./seed');
	seed.default();
}
