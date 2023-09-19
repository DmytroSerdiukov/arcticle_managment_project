import { UsersModel } from "../models";
import Mongo from "./Mongo";
import Token from "./Token";

export class Auth extends Mongo {
  constructor() {
    super();
  }

  isUserExist = (login: string) => {
    if (login) return true;
    return false;
  };

  findUser = () => {};

  authUser = async (data: any) => {
    const { login, password } = data;
    const user = await UsersModel.findOne({ login });
    if (user && user.password === password) {
      const username = user.login;
      const token = new Token();
      token.createToken(user.login);
      const jwt = token.getToken();

      return { username, jwt };
    }
    return false;
  };

  giveJWT = () => {};

  registerUser = async (data: any) => {
    const { login, password } = data;
    const user = await UsersModel.findOne({ login: login });
    if (user) return false;

    const newUser = new UsersModel({
      login: login,
      password: password,
    });
    await newUser.save();
    const registered = await UsersModel.findOne({ login: login });
    console.log(registered);
    const token = new Token();
    token.createToken(login);
    const jwt = token.getToken();
    const username = login;
    return { username, jwt };
  };

  hashPassword = () => {};
}
