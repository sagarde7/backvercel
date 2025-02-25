import mongoose, { Schema } from mongoose;

const orderSchema=new mongoose.Schema({
    name:{
        type:Schema.Types.ObjectId,
        ref:user
    },
    orders:{
        type:Number,
        min:1
    },
    productname:{
        type:Schema.Types.ObjectId,
        ref:Product
    }

})

export default mongoose.model("Orders",orderSchema)