import express from 'express'
import {register} from '../controller/user_controller.js'


const routes=express.Router()

routes.post('/user/register',register)

export default routes