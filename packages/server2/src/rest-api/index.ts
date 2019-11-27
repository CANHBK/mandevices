import express from "express";
import path from "path";
import routeHandlers from "./routes";
import cors from "cors";

export const setupExpress = () => {
  const app = express();
  app.use(cors());
  /**
   * Cài đặt Template Engine EJS
   */
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "views"));
  app.use("/", routeHandlers);
  return app;
};
