import mongoose from "mongoose";

const attachmentSchema =  new mongoose.Schema({
    ticket_id :{
        type: mongoose.Schema.Types.ObjectId,
                ref: 'ticket'
    },
    user_id :{
        type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
    },
    fiilename:{
        type:String,
    },
    storage_key:{type:String},
    mime_type:{type:String},
    side:{type:String},
},{
    timestamps: true
})
const attachmentModel = mongoose.model('attachment',attachmentSchema);

export default attachmentModel;