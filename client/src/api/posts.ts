import { POSTS } from "./intstance";

const ENDPOINTS = {
  posts: "/posts",
};

export const PostsAPI = {
  getPosts: async () => {
    try {
      const res = await POSTS.get(ENDPOINTS.posts);
      return res.data;
    } catch (e) {
      throw e;
    }
  },
  getPostDetails: async (id: any) => {
    try {
      const res = await POSTS.get(`${ENDPOINTS.posts}/${id}`);
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
      await POSTS.put(ENDPOINTS.posts, { post });
    } catch (e) {
      throw e;
    }
  },
  deletePost: async (postId: any) => {
    try {
      await POSTS.delete(`${ENDPOINTS.posts}/${postId}`);
    } catch (e) {
      throw e;
    }
  },
};
