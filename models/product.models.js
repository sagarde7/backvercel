import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    productname:{
        type:String,
        lowercase:true,
        require:true
    },
    brand:{
        type:String,
        require:true
    },

    price:{
        type:Number,
        min:0,
        require:true
    },
    discount:{
        type:Number,
        min:0,
        require:true,
        default:0
    },
    
})

export default mongoose.model("Product",productSchema);