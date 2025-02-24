const userModel=require('../model/userModel')
//login callback
const loginController=async(req,res)=>{
    try{
        const{email,password}=req.body
        const user=await userModel.findOne({email,password})
        if(!user){
            return res.status(404).send('user Not Found')
        };
        res.status(200).json(user);
    }
    catch(error){
        res.status(400).json({
        success:false,
        error
        })   }
}
//Resister callback
const registerController=()=>{ }
module.export={loginController};
