import { Router } from "express";
import { Posts } from "../constants/routes";
const router = Router();

router.get(Posts.posts, () => {
  console.log("#1 posts endpoint");
});
router.get(Posts.post, () => {
  console.log("# post id endpoint");
});
router.post(Posts.posts, () => {});
router.put(Posts.post, () => {});
router.delete(Posts.post, () => {});

export default router;
