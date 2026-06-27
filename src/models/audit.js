import mongoose from 'mongoose';

const auditSchema = new mongoose.Schema({
    user_id :{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    action:{
        type: String,
        required : true,
    },
    action:{
        type: String,
        enum:['create','read','update','delete'],
        required : true,
    },
    section:{
        type : String,
        required : true,
    },
    section_id:{
        type : Number,
        required : true,
    },
    metadata:{
          type : String,
    }
},{
    timestamps: true
})
const auditModel = mongoose.model('audit_log',auditSchema)

export default auditModel;