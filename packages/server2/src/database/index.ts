import "reflect-metadata";

import { createConnection } from "typeorm";
createConnection({
	type: "mysql",
	host: process.env.DB_HOST,
	port: JSON.parse(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	logging: JSON.parse(process.env.DB_LOGGING),
	synchronize: JSON.parse(process.env.DB_SYNC),
	entities: [process.env.DB_ENTITIES],
	migrations: [process.env.DB_MIGRATIONS],
	migrationsTableName: process.env.DB_MIGRATIONS_TABLE_NAME,
	migrationsRun: JSON.parse(process.env.DB_MIGRATION_RUN)
})
	.then(connection => {
		console.log("Connected to Database");
		connection
			.runMigrations()
			.then(() => {
				console.log("Run migration successfully");
			})
			.catch(errorMigration =>
				console.log("errorMigration", errorMigration)
			);
	})
	.catch(errorDatabaseConnection =>
		console.log("errorDatabaseConnection", errorDatabaseConnection)
	);
