import { Router, Request, Response } from 'express'
import { Auth, Posts } from '../constants/routes'
import { Auth as AuthController } from '../controllers/Auth'

const router = Router()
const auth = new AuthController()

router.post(Auth.auth, auth.authUser)
router.post(Auth.register, auth.registerUser)

export default router
