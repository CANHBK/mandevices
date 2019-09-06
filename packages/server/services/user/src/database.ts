import mongodb from 'mongodb';
import assert from 'assert';

const MongoClient = mongodb.MongoClient;

const url = process.env.DATABASE_CONNECTION_STRING!;

const dbName = 'mandevices';

const client = new MongoClient(url, {
	useNewUrlParser: true
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
