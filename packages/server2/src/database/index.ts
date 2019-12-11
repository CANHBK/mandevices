import mysql from 'mysql2/promise';
import DBMigrate from 'db-migrate';

const dbMigrate = DBMigrate.getInstance(true);

dbMigrate.up().then(() => console.log('migration done')).catch(error => console.log('migration error: ', error));

export const dbClient = mysql.createPool({
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

