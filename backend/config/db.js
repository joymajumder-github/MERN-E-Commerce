const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect('mongodb+srv://joymazumder027:joymazumder027@ecommerse.bof5dhd.mongodb.net/Ecommerse?retryWrites=true&w=majority&appName=Ecommerse')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB
