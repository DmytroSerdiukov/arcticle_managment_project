import { UsersModel } from '../models'
import { User, userData } from '../models/validation'
import asyncErrorHandler from '../utils/asyncErrorHandler'
import Mongo from './Mongo'
import Token from './Token'

export class Auth extends Mongo {
  constructor() {
    super()
  }

  authUser = asyncErrorHandler(
    async (req: Request, res: Response, next: any) => {
      userData.parse(req.body!.data)
      const { login, password } = req.body!.data
      const user = await UsersModel.findOne({ login })
      if (user && user.password === password) {
        const username = user.login
        const token = new Token()
        token.createToken(user.login)
        const jwt = token.getToken()
        res.status(201).json({ response: { username, jwt } })
      }
      res.status(400).json({ msg: 'Login or email is invalid' })
    }
  )

  registerUser = asyncErrorHandler(
    async (req: Request, res: Response, next: any) => {
      userData.parse(req.body!.data)
      const { login, password } = req.body!.data
      const user = await UsersModel.findOne({ login: login })
      if (user) return res.status(400).json({ msg: 'User already exists' })
      const newUser = new UsersModel({
        login: login,
        password: password,
      })
      await newUser.save()
      const token = new Token()
      token.createToken(login)
      const jwt = token.getToken()
      const username = login
      res.status(201).json({ response: { username, jwt } })
    }
  )
}
