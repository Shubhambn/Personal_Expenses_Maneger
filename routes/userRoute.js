const express = require('express')
//router object
const router=express.Router()

//routers
//POST||Login
router.post('/login',loginController)

module.exports=router