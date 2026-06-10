const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name :{
        type : String,
        required : true,
        minLength : 3,
        maxLength : 20,
    },
    email :{
        type  : String,
        unique : true,
        required : true
    },
    password :{
        type : String,
        required : true,
    },
    role :{
        type : String,
        enum : ["admin","user"],
        default : "user"
    },
    verified :{
        type : Boolean,
        default : false
    },
    otp : {
        type : String
    },
    otpExpiry :{
        type  : Date
    }
},{timestamps:true})
const User = mongoose.model("User",UserSchema);
module.exports = User;