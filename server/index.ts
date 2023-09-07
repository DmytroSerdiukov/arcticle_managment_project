import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import posts from "./routes/posts";
import auth from "./routes/auth";
import connectDB from "./config/db";
import RSSParser from "./controllers/RSSParser";
import cors from "cors";
import Mongo from "./controllers/Mongo";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use("/", posts);
app.use("/", auth);

const start = () => {
  app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    const db = new Mongo();
    db.createDBCon();
    const parser = new RSSParser();
    parser.parse();
  });
};

start();
