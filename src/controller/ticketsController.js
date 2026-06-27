import ticketModel from "../models/ticketModel.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
import mongoose, { mongo } from "mongoose";

dotenv.config();
const createTicket = async (req,res)=>{
    let token = req.cookies.token;
    const userDetails = jwt.verify(token,process.env.jsonToken);

    const {title,cate_id,description,priority,status,agent_id=null} = req.body;
    try{
        let ticket = await ticketModel.create({
            client_id : userDetails.user_id,
            title:title,
            cate_id:cate_id,
            description:description,
            priority:priority,
            status:status
        })
        res.status(200).json({ticket})
    }catch(error){
        res.status(500).json("Could not create ticket")
    }
}
const getTickets = async (req,res)=>{
    let token = req.cookies.token;
    const userDetails = jwt.verify(token,process.env.jsonToken);

    try{
        const ticket_id = req.params.id;
        let tickets = []
        if(ticket_id){
             tickets = await ticketModel.find({
                client_id:userDetails.user_id,
                _id:ticket_id 
            })
        }else{

             tickets = await ticketModel.find({
                client_id:userDetails.user_id 
            })
        }
        res.status(200).json({
            tickets:tickets
        })
    }catch(error){
        res.status(500).json("Could not resolve request")
    }
}

export {createTicket,getTickets}