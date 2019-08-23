import mongodb from 'mongodb';
import assert from 'assert';

const MongoClient = mongodb.MongoClient;

const url = `mongodb://root:example@database:27017`;

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
