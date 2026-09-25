import UserData from '../model/user.js'
import bcrypt from 'bcrypt'

export const addUser = async(req,res)=>{
    try{
        const password = await bcrypt.hash(req.body.password,10)
        const saveuserdata = {
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            password:password
        }
        const saveuser = await UserData.create(saveuserdata)
        console.log("Inserted!!!")
        res.status(200).json({'message':"Inserted!!!",data:saveuser})
    }
    catch(error){
        res.status(500).json({'message':error.message})
    }
}

export const getalluser = async(req,res)=>{
    try{
        const getalluser = await UserData.find()
        console.log("Get All The User!!!")
        res.status(200).json({'message':"Get All User!!!",data:getalluser})
    }
    catch(error){
        res.status(500).json({'message':error.message})
    }
}

export const getoneuser = async(req,res)=>{
    try{
        const id=req.params.uid
        const getoneuser = await UserData.findById(id)
        console.log("Get Single The User!!!")
        res.status(200).json({'message':"GET one User!!!",data:getoneuser})
    }
    catch(error){
        res.status(500).json({'message':error.message})
    }
}

export const login = async(req,res)=>{
    try{
        const udata=await UserData.findOne({email:req.body.email})

        if(!udata){
        res.status(200).json({message:"User not found",status:0})    
    }
    
    const comaprepass=await bcrypt.compare(req.body.password,udata.password)
    
    if(!comaprepass){
            res.status(200).json({  message:"invalid passwords",status:0}) 
        }
        res.status(200).json({message:"Login Successfully",status:1}) 

    }
    catch(error){
        res.status(500).json({'message':error.message})
    }
}

export const updateuser = async(req,res)=>{
    try{
        const id=req.params.uid
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 10)
        }
        const updateuser = await UserData.findByIdAndUpdate(id,req.body,{new:true})
        console.log("Updated User!!!")
        res.status(200).json({'message':"Updated User!!!",data:updateuser})
    }
    catch(error){
        res.status(500).json({'message':error.message})
    }
}

export const deleteuser = async(req,res)=>{
    try{
        const id=req.params.uid
        const deleteuser = await UserData.findByIdAndDelete(id)
        console.log("Deleted User!!!")
        res.status(200).json({'message':"Deleted User!!!",data:deleteuser})
    }
    catch(error){
        res.status(500).json({'message':error.message})
    }
}