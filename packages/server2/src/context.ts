import mongodb from 'mongodb';

export interface Context {
	dbClient: mongodb.Db;
	token: string
}
