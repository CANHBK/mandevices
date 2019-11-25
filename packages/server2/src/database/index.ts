import "reflect-metadata";

import { createConnection } from "typeorm";
import path from "path";

console.log(
	'path.join(__dirname,"security")',
	path.join(__dirname, "security")
);

createConnection()
	.then(connection => {
		console.log("Connected to Database");
		connection
			.runMigrations()
			.then(() => {
				console.log("Run migration successfully");
			})
			.catch(errorMigration => console.log("errorMigration", errorMigration));
	})
	.catch(errorDatabaseConnection =>
		console.log("errorDatabaseConnection", errorDatabaseConnection)
	);
