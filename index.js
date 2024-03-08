const express = require("express");
const port = 7000;
const app = express();
app.set("view engine", "ejs");
app.use("/", require("./routes"));
const db = require("./config/database")

app.listen(port, (err) => {
  if (err) {
    console.log("err");
    return false;
  }
  console.log("server is start on port :- " + port);
});