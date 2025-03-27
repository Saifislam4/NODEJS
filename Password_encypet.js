let bycrypt = require("bycryptjs")

let  mypswd = "Hellow123";
let salt = 12;
let encrypted_pswd = bycrypt.hash(mypswdpswd,salt);

let check  = bycrypt.compaareSync(mypswdpswd,encrypted_pswd)
if(check){
    console.log("Password Has been match")

}
else{
    console.log("Password Has  Not been match")
}
console.log(`Original Password${mypswd}\nENcrypted Password${encrypted_pswd}`)