import mongoose from "mongoose";
const orderSchema=new mongoose.Schema({
    quantity:{
        typr
    }


},{timestamps:true})


export const Order=mongoose.model("Order",orderSchema)