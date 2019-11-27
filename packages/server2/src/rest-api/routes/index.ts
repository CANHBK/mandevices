import express from "express";
import userRoutes from "./user";

const routers = express.Router();

routers.get("/", (req, res) => {
  res.send("Mandevices Server");
});
routers.get("/user", userRoutes);

routers.post('/post/upload',(req,res) => {
  console.log('new request');
})

export default routers;