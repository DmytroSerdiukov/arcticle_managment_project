import { ROUTES } from "../constants/routes";
import { POSTS } from "./intstance";

export const AuthAPI = {
  authUser: async (data: any) => {
    try {
      const res = await POSTS.post(ROUTES.AUTH, { data });
      return res.data;
    } catch (e) {
      throw e;
    }
  },
  registerUser: async (data: any) => {
    try {
      const res = await POSTS.post(ROUTES.REGISTER, { data });
      return res.data;
    } catch (e) {
      throw e;
    }
  },
};
