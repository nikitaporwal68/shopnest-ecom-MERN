const express = require('express');
const {registerUser,loginUser,getUsers, verifyOTP} = require('../controller/authController')
const router = express.Router();
const {protect,admin} = require('../middleware/authmiddleware')

router.post('/register',registerUser);
router.post('/verify-otp',verifyOTP)
router.post('/login',loginUser);
router.get('/users', protect, admin, getUsers);

module.exports = router;