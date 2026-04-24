import user_model from "../model/user_model.js"
import {validemail,validname,validpassword}from "../validation/user_validation.js"

export const register= async(req,res)=>{
    try{ 
        const data=req.body
        const{name,email,password,gender}=data

        if(!email)return res.status(400).send({status:false,success:false,message:"email is required"})
        if(!validemail(email)) return res.status(400).send({status:false,success:false,message:"email is invalid"})
        
        if(!name)return res.status(400).send({status:false,success:false,message:"name is required"})
        if(!validname(name) ) return res.status(400).send({status:false,success:false,message:"name is invalid"})
        
        if(!password) return res.status(400).send({status:false,success:false,message:"password is required"})
        if(!validpassword(password)) return res.status(400).send({status:false,success:false,message:"invalid password"})
        
        const db=await user_model.create(data)
        res.status(200).send({status:true,success:true,message:"user is created successfully",data:db})
    }
    catch(err){res.status(400).send({status:false,msg:err.message})}
}           