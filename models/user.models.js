// e-commerce
import mongoose from mongoose;

const userSchema=new mongoose.Schema({
    name:{

    },
    photo:{

    },
    orders:{

    }

})

export default mongoose.model('User',userSchema);