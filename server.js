const express= require("express");
const colors= require("colors");
const dotenv= require("dotenv").config();
const path = require("path");
const morgan= require("morgan");
const userdata=require("./utility/userdata.json");

const fileURLtoPath=require("url");

const PORT=5000;

const app=express();//properties of express has been transferrred into app
//express().get() otherwise this
let data={
    "name":"Priyal Jain"
}
app.use(express.json());// pre define middleware

//static files wala middlware
app.use(express.static(path.resolve(__dirname,"./Public")));

app.get("/userdata" ,(req, res)=>{  //request ,response
    res.send(userdata);
        // "message":"Welcome to API",
        // "authorname":"Priyal Jain"     
}) ;
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./Public","index.html"));
});
app.get("/contact",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./Public","contact.html"));
});
// "/" is root//http methods
 // app is calling get method in express
//get take 2 parameters route konsa h and 2nd parameter kya chalana h route se
//route is path modules
//offline \ C:\
//Online / localhost:8080  //https://meet.google.com/ihw-cwuv-fxd?authuser=0

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`.yellow);
})
