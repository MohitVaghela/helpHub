import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'
import clientRoutes from './routes/clients.js'
import ticketsRoutes from './routes/tickets.js'
import cookieParser from 'cookie-parser'

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/',(req,res)=>{
    res.send(req.cookies)
})
app.use('/api/auth',authRoutes);
app.use('/api/clients',clientRoutes)
app.use('/api/tickets',ticketsRoutes)

export default app;
