import express from "express";
import "dotenv/config";
import { router } from "../routes/index.js";
//import mongoose from "mongoose";

//mongoose.connect(process.env.MONGODB_URL);

const server = express();

server.use(express.json());

server.use(router);

export { server };
