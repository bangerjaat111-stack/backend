import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import routes from './routes/routes.js';

const app=express()
app.use(cors())
app.use('/',routes)

const port =8080 || process.env.PORT
app.listen(port , ()=>{console.log(`server is running on port :http://localhost:${port}`)})