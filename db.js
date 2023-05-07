const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
require("dotenv").config();
// here i can create the new folder name "inotebook" inside of "mongodb compass"
const mongoUri = process.env.MONGO_URL;
const connectToMongo = () => {
  mongoose.connect(mongoUri, () => {
    console.log("mongoose Uri connected successfully");
  });
};
module.exports = connectToMongo;
