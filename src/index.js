import express from 'express';
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import routes from './routes/routes.js';

dotenv.config()
const app =express()
app.use(cors())
app.use('/',routes)
mongoose.connect('mongodb+srv://Yogesh:yogeshbanger@cluster0.xyohb54.mongodb.net/')
.then(()=>console.log('mongoose is connect'))
.catch((err)=>console.log('mongoose is not connect',err.message))

const port = process.env.PORT || 8080

app.listen(port , ()=>{console.log(`server is running on port : http://localhost:${port}`)});