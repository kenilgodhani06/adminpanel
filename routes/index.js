const express = require("express");
const routes = express.Router();

const RegisterController = require("../controllers/RegisterControllers");

routes.get("/", (req, res) => {
  return res.render("index");
});

routes.get("/register", RegisterController.register);

module.exports = routes;
