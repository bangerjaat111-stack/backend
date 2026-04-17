import express from 'express'
import {createuser} from '../controller/user_controller.js'

const routes=express.Router()
routes.get('/a',createuser)
export default routes