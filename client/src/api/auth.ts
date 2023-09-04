import { ROUTES } from "../constants/routes";
import { POSTS } from "./intstance";

export const AuthAPI = {
  authUser: async (data: any) => {
    try {
      const res = await POSTS.post(ROUTES.AUTH, { data });
      if (!res.data.response) return;
      return res.data.response;
    } catch (e) {
      throw e;
    }
  },
  registerUser: async (data: any) => {
    try {
      const res = await POSTS.post(ROUTES.REGISTER, { data });
      console.log(res.data);
      return res.data.response;
    } catch (e) {
      throw e;
    }
  },
};
