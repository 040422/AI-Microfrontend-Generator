// server/config/db.js

import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGODB_CONNECTION_STRING;
  if (!uri) {
    console.error("❌ MongoDB URI is undefined. Check your .env file.");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
