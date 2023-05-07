const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// here i can create the new folder name "inotebook" inside of "mongodb compass"
const mongoUri =
  "mongodb://127.0.0.1:27017/inotebook?readPreference=primary&appname=MonogoDB%20Compass&directConnection=true&tls=false";
const connectToMongo = () => {
  mongoose.connect(mongoUri, () => {
    console.log("mongoose Uri connected successfully");
  });
};
module.exports = connectToMongo;
