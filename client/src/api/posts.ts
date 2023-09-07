import { POSTS } from "./intstance";

const ENDPOINTS = {
  posts: "/posts",
};

export const PostsAPI = {
  getPosts: async () => {
    try {
      const res = await POSTS.get(ENDPOINTS.posts);
      console.log("in api", res.data);
      return res.data;
    } catch (e) {
      throw e;
    }
  },
  getPostDetails: async (id: any) => {
    try {
      const res = await POSTS.get(`${ENDPOINTS.posts}/${id}`);
      console.log(res);
      return res.data;
    } catch (e) {
      throw e;
    }
  },
  createPost: async (post: any) => {
    try {
      await POSTS.post(ENDPOINTS.posts, { post });
    } catch (e) {
      throw e;
    }
  },
  updatePost: async (post: any) => {
    try {
      console.log(post);
      await POSTS.put(`${ENDPOINTS.posts}/${post.id}`, { post });
    } catch (e) {
      throw e;
    }
  },
  deletePost: async (postId: string) => {
    try {
      console.log(postId);
      await POSTS.delete(`${ENDPOINTS.posts}/${postId}`);
    } catch (e) {
      throw e;
    }
  },
};
