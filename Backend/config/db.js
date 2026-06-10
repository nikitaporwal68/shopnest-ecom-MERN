const mongoose = require('mongoose');

// connected mongoose
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected Successfully");
    }
    catch(err){
        console.log(err)
    }
}
module.exports = connectDB;