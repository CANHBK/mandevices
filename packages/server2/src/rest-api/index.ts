import express from "express";
import path from "path";
import userRoutes from "./routes/user";

export const setupExpress = () => {
	const app = express();

	/**
	 * Cài đặt Template Engine EJS
	 */
	app.set("view engine", "ejs");
	app.set("views", path.join(__dirname, "views"));
	app.use("/user", userRoutes);
	return app;
};
