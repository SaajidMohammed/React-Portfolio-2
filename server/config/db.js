// server/config/db.js

// Change 'import mongoose from 'mongoose';' to this:
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a non-zero code to indicate an error
  }
};

// Change 'export default connectDB;' to this:
module.exports = connectDB;