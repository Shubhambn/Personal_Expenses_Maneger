const mongoose = require('mongoose')

//schema design
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is require']
    },
    gmail:{
        type:String,
        required:[true,"email is required"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'password is required']
    }
})
//export
const userModel =mongoose.model('user',userSchema)
module.exports=userModel