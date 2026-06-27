import clientModel from "../models/clientModel.js";
import userModel from "../models/userModel.js";

const getClients = async (req, res) => {
    try {
        let clients =[] 
        let uid = req.params.id;
        if (uid) {
            clients = await clientModel.findOne({ _id: uid }).populate('user_id');
        } else {
            clients = await clientModel.find({}).populate('user_id');
        }

        if (!clients) {
            res.status(404).json("No user found")
        }
        res.status(200).json({ clients: clients });
    } catch (error) {
        res.status(500).json("Undefined error occured")
    }
}
const verify = async (req,res)=>{
    let userId = req.params.id;

    const user = await clientModel.findOneAndUpdate({_id:userId},{isVerified:true},{ new: true });
    res.send(user);

}
const deactivate = async (req,res)=>{
    let userId = req.params.id;

    const user = await userModel.findOneAndUpdate({_id:userId},{isActive:false},{ new: true });
    res.send(user);

}
export {
    getClients,verify,deactivate
}