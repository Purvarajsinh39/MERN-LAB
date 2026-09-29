import express from 'express'
import { addUser,getalluser,getoneuser,login,updateuser,deleteuser } from '../controller/UserDataController.js'
import authenticateToken from '../utils/Authmiddleware.js'
const route = express.Router()

route.post('/api/add-user',addUser)
route.get('/api/getall-user',authenticateToken,getalluser)
route.get('/api/getone-user/:uid',authenticateToken,getoneuser)
route.put('/api/update-user/:uid',authenticateToken,updateuser)
route.delete('/api/delete-user/:uid',authenticateToken,deleteuser)
route.post('/api/login',login)


export default route