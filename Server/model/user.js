import mongoose from 'mongoose';
import mongoes from 'mongoose';

const userSchema = new mongoes.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:String,
        require:true
    },
    passwords:{
        type:String,
        require:true
    }
},{
    timestamps:true,
    collection:"UserData"
})

export default mongoose.model("UserData",userSchema)