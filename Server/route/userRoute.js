import express from 'express'
import { addUser,getalluser,getoneuser } from '../controller/UserDataController.js'

const route = express.Router()

route.post('/api/add-user',addUser)
route.get('/api/getall-user',getalluser)
route.get('/api/getonne-user/:uid',getoneuser)


export default route