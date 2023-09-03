import Mongo from "./Mongo";

class Auth extends Mongo {
  constructor() {
    super();
  }

  isUserExist = (login: string) => {
    if (login) return true;
    return false;
  };

  findUser = () => {};

  authUser = () => {};

  giveJWT = () => {};

  registerUser = () => {};

  hashPassword = () => {};
}

export default Auth;
