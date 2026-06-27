import mongoose from "mongoose";
import userModel from '../models/userModel.js'
import bcrypt from "bcryptjs";
import dotenv from 'dotenv'
import clientModel from "../models/clientModel.js";
import jwt from "jsonwebtoken";

dotenv.config()

const register = async (req, res) => {
    let { username, email, password, role = 'client', isActive = false, company_name = '', billing_reference = '' ,secret_key=''} = req.body;
    const isUserExist = await userModel.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    })
    if (isUserExist) {
        res.status(409).json({
            message: "User Already exist"
        })
    } else {
        try {
            const saltRounds = parseInt(process.env.ENCRYPT_ROUND, 10) || 10;
            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(password, salt);
       
            const createdUser = await userModel.create({
                name: username,
                email,
                password: hashedPassword,
                role,
                isActive
            });
            if (role == 'client') {

                await clientModel.create({
                    user_id: createdUser._id,
                    company_name: company_name,
                    billing_ref: billing_reference
                })
            }

            res.status(201).json({ message: "User registered successfully", userId: createdUser._id });
        } catch (err) {
            console.error("Registration Error:", err);

            res.status(500).json({ error: "Internal server error occurred." });
        }
    }
}
const login = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await userModel.findOne({
            email:email,
            isActive:true
        })
        let isValid = await bcrypt.compare(password,user.password);
        if(isValid){
            let token = jwt.sign({
                user_id: user._id,
                role:user.role
            },process.env.jsonToken);
            res.cookie("token",token)
            res.status(200).json({message : "User Log in successfully"})
        }else{
            res.status(401).json("Invalid credentails")
        }
    }catch(error){
        res.status(500).json("Unexpected error occured")
    }
}
const auth = async (req,res)=>{
    let token = req.cookies.token;
    if(token){
        let userDetails = jwt.verify(token,process.env.jsonToken);

        let user = await userModel.findOne({
            _id:userDetails.user_id
        })
        res.status(200).json({user_details:user})
    }else{
        res.send("No user logged in ")
    }

}

export {
    register,login,auth
}