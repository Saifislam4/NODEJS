var exp = require("express");
var r  = require("./Route/router");

let app = exp();
app.use("/",r)

app.listen(3002,()=>{
    console.log(`Server Started at http://localhost:3002 `)
});