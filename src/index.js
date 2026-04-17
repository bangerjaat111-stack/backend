import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import routes from './routes/routes.js';

dotenv.config()
const app=express()
app.use(cors())
app.use('/',routes)
mongoose.connect('mongodb+srv://Yogesh:yogeshbanger@cluster0.xyohb54.mongodb.net/')
.then(()=>console.log('mongose is connected'))
.catch((err)=>console.log('mongoose is not connected',err.message))
const port =8080 || process.env.PORT
app.listen(port , ()=>{console.log(`server is running on port :http://localhost:${port}`)})