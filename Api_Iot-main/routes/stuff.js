const express = require("express");
const route = express.Router();
const stuffControllers = require("../controllers/stuff.js"); 

route.get("/",stuffControllers.get_Etat);
route.put("/",stuffControllers.modifyEtat);
route.post("/" , stuffControllers.createHoueEtat)
module.exports = route;  