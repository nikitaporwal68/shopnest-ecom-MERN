const jwt = require('jsonwebtoken');
const env = require('dotenv');
const User = require('../model/user');
env.config();

const protect = async(req,res,next)=>{
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token,process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select('-password');
            next();
        }
        catch(err){
            res.status(400).json({message : "Not Authorized, Token needed!!"})
        }
    }
    if(!token){
        res.status(400).json({message : "Not Authorized, Token needed!!"})
    }
}

const admin = async(req,res,next)=>{
    if(req.user.role === 'admin'){
        next();
    }
    else{
        res.status(403).json({"message" : "Access Denied"});
    }
}

module.exports = {protect,admin}