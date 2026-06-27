import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
          tikect_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'ticket'
            },
            author_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            },
            body:{
                type : String,
                require:true,
            },
            isInternal:{ type: Boolean, default:false},
},{
    timestamps: true
})
const commentModel = mongoose.model('comment',commentSchema);

export default commentModel;