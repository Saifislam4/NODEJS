let mongo = require("mongoose");
require("dotenv").config();

let db = process.env.DB_URL

let db_func = async function(){
    mongo.connect("mongodb+srv://Saifislam4223:karachi7863@cluster0.sc81p.mongodb.net/batch2207b1").then(()=>{
        console.log("Connection has been built")
    }).catch((e)=>{
        console.log(e)
    })
} 
module.exports = db_func