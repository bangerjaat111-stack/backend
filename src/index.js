import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import routes from './routes/routes.js'
const app=express()
app.use(cors())
dotenv.config()
app.use(express.json())
const port = process.env.PORT || 6060
mongoose.connect(process.env.mongodburl)
.then(()=>console.log('mongoose is connected'))
.catch((err)=>console.log('mongoose is not connect'))
app.use('/',routes);


app.listen(port , ()=>console.log(`server is running on port : http://localhost:${port}`))