const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    price :{
        type : Number,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    stock : {
        type : Number
    },
    imageUrls :{
        type  : String,
        
    },
    rating : {
        type : Number
    },
    numReviews : {
        type  :Number
    }
},{timestamps : true})


const Product =  mongoose.model("Product",productSchema);
module.exports = Product;