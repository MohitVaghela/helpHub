import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type: String, require: true },
    type: {
        type: String,
        enum: ['ticket', 'article'],
        isActive: { type: Boolean, default: false },
    }
},{
    timestamps: true
})

const categoryModel = mongoose.model('category',categorySchema);

export default categoryModel;