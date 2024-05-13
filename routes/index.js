const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/ttech", myController.awesomeFunction);
routes.get("/", myController.worldFunction);

module.exports = routes;
