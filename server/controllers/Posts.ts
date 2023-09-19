import Mongo from "./Mongo";
import { PostsModel } from "../models";

class PostsManager extends Mongo {
  constructor() {
    super();
  }

  createInstance = () => {};

  getPosts = async () => {
    const posts = await PostsModel.find();
    return posts;
  };

  getPost = async (id: any) => {
    const post = await PostsModel.findOne({ _id: id });
    return post;
  };

  createFetchedPost = async (post: any) => {
    const newPost = new PostsModel({
      title: post.title,
      categories: post.categories,
      content: post["content:encodedSnippet"],
      creator: post.creator,
      pubDate: post.pubDate,
    });
    await newPost.save();
  };

  createPost = async (post: any) => {
    const newPost = new PostsModel({
      title: post.title,
      content: post.content,
      creator: post.creator,
      pubDate: post.pubDate,
    });
    await newPost.save();
  };

  deletePost = async (postId: string) => {
    await PostsModel.deleteOne({ _id: postId });
  };

  updatePost = async (id: any, data: any) => {
    console.log("UPDATE", data);
    const POST = await PostsModel.updateOne(
      { _id: id },
      {
        title: data.title,
        content: data.content,
        pubDate: data.pubDate,
        creator: data.creator,
      }
    );
    const p = await PostsModel.find({ _id: id });
  };
}

export default PostsManager;
