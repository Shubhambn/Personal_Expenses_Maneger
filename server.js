const express =require('express')
const cors =require('cors')
const morgan=require('morgan')
const dotenv =require('dotenv')
const colors = require('colors')
const connectDb=require("./config/connectDb")
//config dot env file
dotenv.config();
// database call
connectDb();
//rest object
const app=express()
//middleware
app.use(morgan('dev'))

app.use(express.json())
app.use(cors())

//routes
app.get('/',(req,res)=>{
    res.send("<h1>Hellow from server</h1>")
})
//port
const PORT = process.env.PORT || 8080;

//listen server
app.listen(PORT,()=>{
    console.log(`server runnig on port ${PORT} `)
}) 