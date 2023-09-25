import mongoose from 'mongoose'
import { env } from 'process'

class Mongo {
  db: any
  constructor() {
    this.db = this.getInstance()
  }

  getInstance = () => {
    if (this.db) {
      return this.db
    }
    const instance = this.createDBCon()
    return instance
  }

  createDBCon = async () => {
    await mongoose.connect(
      'mongodb+srv://dmytroserdiukov:serdiukov@cluster0.2hr5gq3.mongodb.net/'
    )
    console.log('MongoDb Connected')
  }
}

export default Mongo
