import { z } from "zod";

export const schema = z.object({
  login: z.string().nonempty(),
  password: z.string().nonempty(),
  rememberMe: z.boolean().optional(),
});

export const PostSchema = z.object({
  title: z.string().nonempty(),
  description: z.string().nonempty(),
});
export const NewPostSchema = z.object({
  title: z.string().nonempty(),
  content: z.string().nonempty(),
});
