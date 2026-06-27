import app from './src/app.js';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';

connectDB();

dotenv.config();

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log("app is running on port: "+port)
})

