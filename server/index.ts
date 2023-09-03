import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import posts from "./routes/posts";
import auth from "./routes/auth";
import connectDB from "./config/db";
dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", posts);
app.use("/", auth);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
connectDB();
