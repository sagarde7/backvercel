import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import DB_NAME from "../utils/constants.js"

async function connectDB(){
    try{
        const con=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("connected");
        
    }
    catch(err){
        console.log("cannot",err);
        process.exit(1);
    }
}

export default connectDB;