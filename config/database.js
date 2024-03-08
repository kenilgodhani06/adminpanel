const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mine");

const db = mongoose.connection;

db.on("connected", (err) => {
  if (err) {
    console.log(err);
    return false;
  }
  console.log("DB is connected");
});
