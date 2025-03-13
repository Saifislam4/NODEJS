let server=require("http");
require("dotenv").config();
let{exec} = require("child_process")
let port_no = process.env.PORT

server.createServer(function(req,res){
    if(req.url === "/"){
    res.writeHead(200,{"content-type":"text/html"})
    res.write(`<h1>Home Page </h1>
     <ul>
        <li><a href="/c">Go to Contact</a></li>
        <li><a href="/a">Go to About</a></li>
        <li><a href="/b">Go to Booking</a></li>
        <li><a href="/l">Go to Location </a></li>
        </ul>`)
   
    res.end()
    }
    else if (req.url === "/a"){
        res.writeHead(200,{"content-type":"text/html"})
    res.write(`<h1>Go to About </h1> `)

res.end()
}
else if (req.url === "/b"){
    res.writeHead(200,{"content-type":"text/html"})
res.write(`<h1> Go to Booking</h1> `)

res.end()
}
else if (req.url === "/c"){
    res.writeHead(200,{"content-type":"text/html"})
res.write(`<h1>Go to Contact </h1> `)

res.end()
}
else if (req.url === "/l"){
    res.writeHead(200,{"content-type":"text/html"})
res.write(`<h1>Go to Location </h1> `)

res.end()
}
else{
    res.writeHead(404,{"content-type":"text/html"})
res.write(`<h1 style='color:red'>Page Not Found </h1> `)

res.end()
}
}).listen(port_no,()=>{
    console.log(`Server started at http://localhost:${port_no}`)
     let  u =`http://localhost:${port_no}`;
     if (process.platform === "win32")   {
        exec(u);
     }
    
})