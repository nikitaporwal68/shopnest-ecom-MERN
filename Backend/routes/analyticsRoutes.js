const express = require('express');
const router = express.Router();
const {protect,admin} = require('../middleware/authmiddleware');
const {processPayment,getPaymentStatus} = require('../controller/paymentController');
const getAdminStats = require('../controller/analyticsController')

router.get("/",protect,admin,getAdminStats);

module.exports = router;