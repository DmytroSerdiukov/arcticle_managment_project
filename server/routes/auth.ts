import { Router, Request, Response } from 'express'
import { Auth, Posts } from '../constants/routes'
import { Auth as AuthController } from '../controllers/Auth'

const router = Router()
const auth = new AuthController()

router.route(Auth.auth).post(auth.authUser)

router.route(Auth.register).post(auth.registerUser)

export default router
