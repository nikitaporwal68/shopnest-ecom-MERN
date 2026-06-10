const Product = require('../model/product');
const cloudinary = require('../config/cloudinary');

const getProducts = (async(req,res)=>{
    try{
        const data = await Product.find({});
        res.status(200).json({data});
    }
    catch(err){
        console.error('updateProduct error:', err.message);
        res.status(500).json({ message: err.message });
    }
})

const getProductById = (async(req,res)=>{
    try{
        const data = await Product.findById(req.params.id);
        if(data){
            res.status(200).json({data});
        }
        else{
            res.status(404).json({"Message":"Page not Found"})
        }
    }
    catch(err){
        res.status(500).send("Internal Server Error");
    }
})

const createProduct=  (async(req,res)=>{
    try{
        let {imageUrls}  = req.body;

        if(req.file){
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrls = result.secure_url;
        }
        await Product.create({...req.body, imageUrls});
        res.status(201).json({"Message" : "Product Created Successfully!!"});
    }
    catch(err){
        
        res.status(500).send("Internal Server Error");
    }
})

const updateProduct = (async(req,res)=>{
    try{
        const {name,description,price,category,stock} = req.body;
        const product = await Product.findById(req.params.id);

        if(!product) return res.status(404).json({ message: "Product not Found" });

            product.name  = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.category = category || product.category;
            product.stock = stock || product.stock;
            if(req.file){
                const result = await cloudinary.uploader.upload(req.file.path);
                product.imageUrls = result.secure_url;
            }
        
        const updated = await product.save();
        res.json({updated});
    }
    catch(err){
        res.status(500).send("Internal Server Error!!")
    }
})

const deleteProduct = (async(req,res)=>{
    try{

        await Product.findByIdAndDelete(req.params.id);
        res.json({"message":"Deleted Successfully"})
    }
    catch(err){
        res.status(500).send("Internal Server Error!!");
    }
})
module.exports = {getProducts,getProductById,createProduct,updateProduct,deleteProduct};