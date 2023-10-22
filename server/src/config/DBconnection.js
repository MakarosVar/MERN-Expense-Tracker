import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const DBconnection = async () => {
  try {
    await mongoose.connect( process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoIndex: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export default DBconnection;