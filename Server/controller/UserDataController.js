import UserData from '../model/user.js'

export const addUser = async(req,res)=>{
    try{
        const saveuserdata = {
            name:req.body.name,
            email:req.body.email,
            phone:req.body.email
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