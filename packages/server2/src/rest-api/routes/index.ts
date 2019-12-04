import express from "express";
import userRoutes from "./user";
import { emailConfirmHandler } from "../controllers/user";

const routers = express.Router();

routers.get("/", (req, res) => {
  res.send("Mandevices Server");
});
routers.get("/user/confirm-email", emailConfirmHandler);

routers.post('/post/upload',(req,res) => {
  console.log('new request');
})

export default routers;