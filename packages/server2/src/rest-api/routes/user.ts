import { emailConfirmHandler } from "../controllers/user";
import express from "express";

const routes = express.Router();

routes.get("/confirm-email", emailConfirmHandler);

export default routes;
