const mongoose = require("mongoose");
const { DB_Name } = require("../constants.js");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_Name}`
    );

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;