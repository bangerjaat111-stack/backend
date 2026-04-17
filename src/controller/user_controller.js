export const createuser=async(req,res)=>{
    try{
        res.send({staus:true,msg:'user created successfully'})
    }
    catch (err){
        res.status(500)({staus:false, msg:err.message})
    }
}