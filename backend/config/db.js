require("dotenv").config();

const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI,
      console.log("MongoDB connected SUCCESFULY")
    );
  } catch (error) {
    console.log("MongoDB connection FAILED");
  }
};

module.exports = connectToDB;
