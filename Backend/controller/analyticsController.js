const User = require('../model/user');
const Product = require('../model/product');
const Order = require('../model/order')

const getAdminStats = (async(req,res)=>{
    try{

        const totalUsers = await User.countDocuments({role: 'user'});
        const totalOrders = await Order.countDocuments();
        const totalProducts = await Product.countDocuments();  
        const orders = await Order.find();
        const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);

        res.json({
            totalUsers,     
            totalOrders,
            totalProducts,  
            totalRevenue
        });
    }catch(err){
        console.log(err)
        res.status(500).json({message : "Internal Server Error"});
    }
})

module.exports = getAdminStats;