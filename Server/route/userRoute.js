import express from 'express'
import multer from 'multer'
import { addUser,getalluser,getoneuser,login,updateuser,deleteuser } from '../controller/UserDataController.js'
import authenticateToken from '../utils/Authmiddleware.js'
const route = express.Router()

const storage=multer.memoryStorage()
const upload = multer({ storage:storage  })

route.post('/api/add-user',upload.single("image"),addUser)
route.get('/api/getall-user',authenticateToken,getalluser)
route.get('/api/getone-user/:uid',authenticateToken,getoneuser)
route.put('/api/update-user/:uid',authenticateToken,updateuser)
route.delete('/api/delete-user/:uid',authenticateToken,deleteuser)
route.post('/api/login',login)


export default route