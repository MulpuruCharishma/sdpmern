import mongoose from "mongoose";

const userschema = mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String,
        minlength:6
    }

})

export default mongoose.model("User",userschema)