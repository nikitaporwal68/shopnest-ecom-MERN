const mongoose =  require('mongoose');
const {Schema} = mongoose;

const orderSchema = new Schema({
    user :{
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    items :[{
            productId : {
                type :Schema.Types.ObjectId,
                ref : 'Product',
                required : true
            },
            qty : {
                type : Number,
                required : true,
                min : 1
            }
    }],
    totalAmount  : {
        type : Number,
        required : true
    },
    address  : {
        fullName  :{
            type  :String,
            required : true
        },
        street :{
            type : String,
            required : true
        },
        city : {
            type : String,
            required  :true
        },
        postalCode : {
            type : Number,
            required : true
        },
        country :{
            type :String,
            required : true
        }
    },
    paymentId :{
        type : String,
        required : true
    },
    status : {
        type : String,
        enum: ["Pending", "Shipped", "Delivered"],
        default: "Pending",
    },
},{timestamps : true});

const Order = mongoose.model("Order",orderSchema);
module.exports = Order;
