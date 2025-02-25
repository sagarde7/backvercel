import e from "express";

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

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
});