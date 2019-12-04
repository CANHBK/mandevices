import mysql from "mysql2/promise";

export const dbClient = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "Canhbkhn1",
	database: "test"
});

