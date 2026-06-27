import mongoose from "mongoose";

const clinetSchema = new mongoose.Schema({
    user_id:{ type: mongoose.Schema.Types.ObjectId,
    ref: 'user' },
    company_name:{ type:String, required:true},
    billing_ref:{ type:String, required:true},
    isVerified:{ type: Boolean, default:false},
},{
    timestamps: true
})

const clientModel = mongoose.model('client',clinetSchema);

export default clientModel;