import { Router } from "express";
import { Auth, Posts } from "../constants/routes";
const router = Router();

router.post(Auth.auth, () => {
  console.log("auth");
});
router.post(Auth.register, () => {
  console.log("register");
});

export default router;
