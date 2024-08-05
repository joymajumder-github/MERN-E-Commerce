const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
const corsOptions = {
    origin: 'https://mern-e-commerce-4efl.vercel.app', // Allow only this origin
    credentials: true, // Allow credentials (cookies, etc.)
  };
  
  app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

app.use(express.json())

app.use(cookieParser())

app.use("/api",router)

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})
