const User = require('../model/user')
const bcrypt = require('bcrypt');
const env = require('dotenv');
const jwt = require('jsonwebtoken')
const sendEmail = require('../utils/sendEmail')
env.config();

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}

const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const userExist = await User.findOne({email});
        
        if(userExist && !userExist.verified) {
            await User.deleteOne({email});
        } else if(userExist) {
            return res.status(400).json({message: "User Already Exists"});
        }

        const OTP = Math.floor(Math.random() * 900000 + 100000).toString();
        const expiry = Date.now() + 10 * 60 * 1000;

        const hashed = await bcrypt.hash(password, 5);
        const user = await User.create({name, email, password: hashed, otp: OTP, otpExpiry: expiry});

        if(user) {
            const subject = "Verify Your ShopNest Account";
            const message = `Dear ${name},

Your One-Time Password (OTP) for ShopNest account verification is:

${OTP}

This OTP is valid for 10 minutes. Do not share it with anyone.

Welcome to ShopNest!
Team ShopNest`;
            await sendEmail(email, subject, message);
            res.status(201).json({message: "OTP sent to your email", email});
        } else {
            res.status(409).json({message: "Invalid User data"});
        }
    } catch(err) {
        console.error(err);
        res.status(500).json({message: "Internal Server Error"});
    }
}

const verifyOTP = async (req, res) => {
    const {email, otp} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message: "User not found"});
        if(user.otp !== otp) return res.status(400).json({message: "Invalid OTP"});
        if(user.otpExpiry < Date.now()) return res.status(400).json({message: "OTP Expired"});

        user.verified = true;
        user.otp = undefined;
        user.otpExpiry = undefined;
        await user.save();

        res.json({
            message: "Email verified successfully",
            token: generateToken(user._id)
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({message: "Internal Server Error"});
    }
}

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(401).json({message: "User Not Found"});
        if(!user.verified) return res.status(403).json({message: "Verify your email First"});
        
        const match = await bcrypt.compare(password, user.password);
        if(!match) return res.status(401).json({message: "Invalid Email or Password"});
        
        res.json({
            name: user.name,
            email: user.email,
            _id: user._id,
            role: user.role,
            token: generateToken(user._id)
        });
    } catch(err) {
        console.error(err);
        res.status(500).json({message: "Internal Server Error"});
    }
}

const getUsers = async (req, res) => {
    try {
        const data = await User.find({}).select('-password');
        res.json(data);
    } catch(err) {
        console.error(err);
        res.status(500).json({message: "Internal Server Error"});
    }
}

module.exports = {registerUser, loginUser, getUsers, verifyOTP}