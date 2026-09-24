import express from 'express'
import { addUser,getalluser,getoneuser,login } from '../controller/UserDataController.js'

const route = express.Router()

route.post('/api/add-user',addUser)
route.get('/api/getall-user',getalluser)
route.get('/api/getonne-user/:uid',getoneuser)
route.post('/api/login',login)


export default route