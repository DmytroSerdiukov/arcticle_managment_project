import Mongo from "./Mongo";
import { PostsModel } from "../models";
class Posts extends Mongo {
  constructor() {
    super();
  }

  createInstance = () => {};

  getPosts = async () => {
    const posts = await PostsModel.find();
    return posts;
  };

  getPost = () => {};

  createPost = async (post: any) => {
    const newPost = new PostsModel({
      title: post.title,
      content: post.content,
      categories: post.categories,
      creator: post.creator,
      pubDate: post.pubDate,
    });
    await newPost.save();
  };

  deletePost = () => {};

  updatePost = () => {};
}

export default Posts;
