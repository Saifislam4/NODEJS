let nodemailer = require(`nodemailer`)
require("dotenv").config()

let Email_Info = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
})
let Email_Body={
    to:["hunainhassan247@gmail.com","samreenrafiq@aptech.edu.pk","syedikramasadiq1888@getMaxListeners.com"],
    from: process.env.EMAIL,
    subject:"Hellow Hunain!",
    html:"<h6>Hi,<br>Hope you are doing well</h6>"
}
Email_Info.sendMail(Email_Body,function(error,info){
    if(error){
        console.log("Something went wrong")
        console.log(error)
    }
    else{
        console.log(`Email Has been sent to ${Email_Body.to}`)
        console.log(info)
    } 
})