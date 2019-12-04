import { emailConfirmHandler } from "../controllers/user";
import express from "express";

const routes = express.Router();

routes.get("confirm-email", ()=>{
    console.log('confirm');
});

export default routes;
