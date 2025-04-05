let  func = require("../Logic_functions/controller")

let express = require("express");

let route  = express.Router()

route.get("/",func.Home)
route.get("/c",func.Contact);
route.get("/f",func.Feedback);
route.get("/h",func.Help );
route.get("/fa",func.Faqs );
route.get("/p",func.Privacy );


module.exports = route;