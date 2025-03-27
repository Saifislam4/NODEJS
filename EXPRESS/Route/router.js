let  func = require("../Logic_functions/controller")

let express = require("express");

let route  = express.Router()

route.get("/",func.Index)
route.get("/a",func.About);
route.get("/c",func.Contact);

module.exports = route;