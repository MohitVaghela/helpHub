import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    cat_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
     status: {
        type: String,
        enum: ['draft', 'published', 'archived'],
    },
}, {
    timestamps: true
})

const articleModel = mongoose.model('article',articleSchema);

export default articleModel;