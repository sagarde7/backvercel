import e from "express";
// import connectDB from "./db";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/index.js";

const app=e();
const port=3000;

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/about",(req,res)=>{
    res.send("About Page");
});

app.get("/login",(req,res)=>{
    res.send("love you guys");
})
connectDB().then(()=>{

    app.listen(port,()=>{
        console.log(`http://localhost:${port}`);
    })
}


).catch(err=>{
    console.log("error");
    
})