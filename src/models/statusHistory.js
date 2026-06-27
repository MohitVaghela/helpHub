import mongoose from "mongoose";

const statusHistorySchema = new mongoose.Schema({
    ticket_id:{ type: mongoose.Schema.Types.ObjectId,
        ref:'ticket'
    },
    from_status:{
        type: String,
        require : true
    },
    to_status:{
    type: String,
        require : true
    },
    user_id:{ type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
}, {
    timestamps: true
})

const statusHistoryModel = new mongoose.model('status_history',statusHistorySchema);

export default statusHistoryModel;