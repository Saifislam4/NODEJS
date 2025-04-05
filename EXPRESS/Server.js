var exp = require("express");
var r  = require("./Route/router");
var db = require("./Connection");

require("dotenv").config;
let app = exp();
app.use("/",r)

db().then(()=>{
    app.listen(3010,()=>{
        console.log(`Server Started at http://localhost:3002 `)
    });
}).catch((e)=>{
    console.log(e)
})
