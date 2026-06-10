const express = require('express');
const router = express.Router();
const {admin,protect} = require('../middleware/authmiddleware')
const multer = require('multer');
const upload = multer({dest : 'upload/'})

const {getProducts,getProductById,createProduct,updateProduct,deleteProduct} = require('../controller/productController')

router.route('/').get(getProducts).post(protect,admin,upload.single('image'),createProduct);
router.route('/:id').get(getProductById).put(protect,admin,upload.single('image'),updateProduct).delete(protect,admin,deleteProduct);

module.exports = router;