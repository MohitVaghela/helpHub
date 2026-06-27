import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

async function connectDB() {
        try{
             mongoose.connect(process.env.DB_URL)
            .then(() => console.log('Connected!'));
        }catch(error){
            return error;
        }
}
export default connectDB;

