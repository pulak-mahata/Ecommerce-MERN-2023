import mongoose from "mongoose";

const monogoURL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    // console.log("database connected".bgMagenta.white);
  } catch (error) {
    // console.log(`eroor while connectinf with database ${error}`);
  }
};

export default connectDB;
