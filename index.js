require("dotenv").config()
let http_module = require("http")
let port_no = process.env.PORT

http_module.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<h1>Server started <h1>")
    res.write("<h1>Another Line <h1>")
    res.end()
}).listen(port_no,()=>{
    console.log(`Server started at http://localhost:${port_no}`
        
    )
})