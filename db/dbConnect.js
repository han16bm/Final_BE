const mongoose = require("mongoose");
require("dotenv").config();
// HLgbQPjTuR6yXWx7
async function dbConnect() {
  mongoose
    .connect("mongodb+srv://dankayknb:HLgbQPjTuR6yXWx7@han.osz3sge.mongodb.net/?retryWrites=true&w=majority&appName=Han")
    .then(() => {
      console.log("Successfully connected to MongoDB Atlas!");
    })
    .catch((error) => {
      console.log("Unable to connect to MongoDB Atlas!");
      console.error(error);
    });
}

module.exports = dbConnect;
