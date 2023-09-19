import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
  title: String,
  categories: Array<String>,
  creator: String,
  pubDate: String,
  content: String,
});
export const PostsModel = mongoose.model("Posts", postSchema);

const userSchema = new Schema({
  login: String,
  password: String,
});
export const UsersModel = mongoose.model("Users", userSchema);
