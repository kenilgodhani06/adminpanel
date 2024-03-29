const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const register = mongoose.model("registe", registerSchema);
module.exports = register;
