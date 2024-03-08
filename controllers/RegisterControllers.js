const registerTbl = require("../models/registerTbl");

const register = async (req, res) => {
  try {
    let registerData = await registerTbl.create({
      name : req.body.name,
      email : req.body.email,
      password : req.body.password,
    });
    if (registerData) {
        console.log("register Done");
    } else {
        console.log("register No Done");
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

module.exports = {
  register,
};
