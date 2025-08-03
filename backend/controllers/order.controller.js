import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";
import dotenv from 'dotenv';
dotenv.config();

import Stripe from "stripe";

//placing user order from frontend


const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)




const placeOrder=async(req,res)=>{

}


export {placeOrder}