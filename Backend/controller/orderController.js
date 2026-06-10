const express = require('express');
const Order = require('../model/order');
const sendEmail = require('../utils/sendEmail');
const User = require('../model/user')

const createOrder = (async(req,res)=>{
    try{
        const {items,totalAmount,address, paymentId} = req.body;
        if(!items || items.length == 0 || !totalAmount || !address){
            return res.status(400).json({message : "Invalid order data"})
        }
        const order = new Order({user : req.user._id,items,totalAmount,address,paymentId});
        await order.save();

         const message = `
            Hi ${req.user.name},

            Your order has been placed successfully! 🎉

            Order Details:
            - Order ID   : ${order._id}
            - Total      : ₹${totalAmount}
            - Address    : ${address.fullName}, ${address.street}, ${address.city}, ${address.postalCode}, ${address.country}
            - Status     : Pending

            We will notify you once your order is shipped.

            Thank you for shopping with us!`;

        await sendEmail(req.user.email,"Order Created",message);
        res.status(201).json({message : "Order created successfully!!"});
    }
    catch(err){
        console.error(err);  
        res.status(500).json({message : "Error creating order"});
    }
})

const updateOrderStatus = (async(req,res) =>{
    try{
        const {status} = req.body;
        const order = await Order.findById(req.params.id);

        if(order){
            order.status = status;
            await order.save();
            res.json({message : "Order status updated",order});
        }
        else{
            res.status(404).json({message: "Order not found"});
        }
    }
    catch(err){
        console.error(err);  
        res.status(500).json({message : "Error updating Order",err});
    }
})

const getOrders = (async(req,res)=>{
    try{
        const order = await Order.find({}).populate('user');
        res.json(order);
    }
    catch(err){
        console.error(err);  
        res.status(500).json({message : "Error fetching orders",err});
    }
})

const myorders = (async(req,res)=>{
    try{
        const orders = await Order.find({user : req.user.id}).populate('items.productId','name price');
        res.status(200).json(orders);

    }catch(err){
        console.error(err);  
        res.status(500).json({message : "Error fetching data"});
    }
})


module.exports = {createOrder,updateOrderStatus,getOrders,myorders};


