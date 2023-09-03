import mongoose, { Schema } from "mongoose";

const postsSchema = new Schema({
  title: String,
  categories: Array<String>,
  creator: String,
  pubDate: String,
  content: String,
});
export const PostsModel = mongoose.model("Posts", postsSchema);
