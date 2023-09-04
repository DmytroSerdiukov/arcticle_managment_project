import crypto from "crypto";
import jwt from "jsonwebtoken";

class Token {
  token: any;
  constructor() {
    this.token = "";
  }

  createToken = (username: any) => {
    const token = crypto.randomBytes(64).toString();
    this.token = jwt.sign(username, token);
  };

  getToken = () => {
    return this.token;
  };
}

export default Token;
