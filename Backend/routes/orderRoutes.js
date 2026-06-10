const express = require('express');
const router = express.Router();
const {updateOrderStatus,getOrders,createOrder,myorders} = require('../controller/orderController')
const { protect } = require('../middleware/authmiddleware'); 
const { admin } = require('../middleware/authmiddleware');  



router.route('/myorders').get(protect, myorders);            
router.route('/').post(protect, createOrder).get(protect, admin, getOrders);
router.route('/:id/status').put(protect, admin, updateOrderStatus); 
module.exports = router;