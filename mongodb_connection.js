//npm i mongoo
se
let  mongodb = require("mongoose")
require("dotenv").config()

mongodb.connect(process.env.URL).
then (()=>{
    console.log("Connection has been establish")
}).catch((e)=>{
console.log(e)
})