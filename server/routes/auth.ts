import { Router, Request, Response } from "express";
import { Auth, Posts } from "../constants/routes";
import { Auth as AuthController } from "../controllers/Auth";

const router = Router();
const auth = new AuthController();

router.post(Auth.auth, (req: Request, res: Response) => {
  const data = req.body;
  auth.authUser(data);
});

router.post(Auth.register, (req: Request, res: Response) => {
  const data = req.body;
  auth.registerUser(data);
});

export default router;
