import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";
import dotenv from 'dotenv';
dotenv.config();

import Stripe from "stripe";

//placing user order from frontend


const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)




const placeOrder=async(req,res)=>{

    const frontend_url=`http://localhost:5173`
    try {
        console.log(req.body)
        const newOrder=new Order({
            userId:req.userId,
            items:req.body.items,
            amount:req.body.totalAmount,
            address:req.body.address

        })
        await newOrder.save();
        await User.findByIdAndUpdate(req.userId,{cartData:{}})

        const line_items=req.body.items.map((item)=>({
            price_data:{
                currency:"usd",
                product_data:{
                    name:item.name


                },
                unit_amount:item.price*100
            },
            quantity:item.quantity

        }))
        line_items.push({
            price_data:{
                currency:"usd",
                product_data:{
                    name:"delivery cahrges"
                },
                unit_amount:2*100
            },
            quantity:1
        })

        const session=await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:"payment",
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
             cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })
        res.json({
            sucess:true,
            session_url:session.url
        })
        
    } catch(error)  {
        console.log(error);
        res.json({
            success:false,
            message:"error"
        })
        
    }

}


export {placeOrder}