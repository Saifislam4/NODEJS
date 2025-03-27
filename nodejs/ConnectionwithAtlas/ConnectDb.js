let mongodb = require("mongoose")
require("dotenv").config()
let url = process.env.ATLAS_URL
console.log()
mongodb.connect("mongodb+srv://Saifislam4223:karachi7863@cluster0.sc81p.mongodb.net/").
then(()=>{
    console.log("Database Connected")
}).catch((e)=>{
    console.log(e)
})