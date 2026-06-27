import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    client_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'client'
    },
    cate_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    },
    title: { type: String, require: true },
    description: { type: String, require: true },
    priority: {
        type: String,
        enum: ['low', 'normal', 'high', 'urgent'],
        default: 'normal'
    },
    status: {
        type: String,
        enum: ['open', 'in_progress', 'resolved', 'closed', 'reopened'],
        default: 'open'
    },
    agent_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

}, {
    timestamps: true
})

const ticketModel = mongoose.model('ticket',ticketSchema);

export default ticketModel;
