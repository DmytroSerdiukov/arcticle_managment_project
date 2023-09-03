import mongoose from "mongoose";

class Mongo {
  db: any;
  constructor() {
    this.db = this.getInstance();
  }

  getInstance = () => {
    if (this.db) {
      return this.db;
    }
    const instance = this.createDBCon();
    return instance;
  };

  createDBCon = async () => {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDb Connected");
  };
}

export default Mongo;
