import mongoose from "mongoose";
import { env } from "./env.config.js";

export const connectDB = async (req, res) => {
  try {
    mongoose.connect(env.MONGODB_URL);
    console.log("Database connected successfully 👍");
  } catch (error) {
    console.log("Database connection failed 👎", error);
    res.status(500).json({ message: "Database connection failed", error });
  }
};
