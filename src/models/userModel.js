import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{ type:String, required:true},
    email:{ type:String, Unique:true,required:true},
    password :{ type:String,required:true},
    role: {
        type: String,
        enum:['client', 'agent', 'supervisor','admin'],
        default: 'client'
    },
    isActive:{ type: Boolean, default:false},
},{
    timestamps: true
})

const userModel = mongoose.model('user',userSchema);

export default userModel;