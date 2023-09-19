import { Router, Request, Response } from "express";
import { Auth, Posts } from "../constants/routes";
import { Auth as AuthController } from "../controllers/Auth";

const router = Router();
const auth = new AuthController();

router.post(Auth.auth, async (req: Request, res: Response) => {
  const data = req.body.data;
  const response = await auth.authUser(data);
  if (!response) {
    res.status(400).json({ msg: "Invalid data" });
  }
  res.status(200).json({ response });
});

router.post(Auth.register, async (req: Request, res: Response) => {
  const data = req.body.data;
  const response = await auth.registerUser(data);
  if (!response) res.status(400).json({ msg: "Something went wrong" });
  res.status(201).json({ response });
});

export default router;
