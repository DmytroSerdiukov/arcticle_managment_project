import { UsersModel } from "../models";
import Mongo from "./Mongo";

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
    const user = await UsersModel.find({ login: login });
    console.log(user);
    // if(user.password === password)
  };

  giveJWT = () => {};

  registerUser = async (data: any) => {
    // const { login, password } = data;
    // const newUser = new UsersModel(data);
    // await newUser.save();
  };

  hashPassword = () => {};
}
