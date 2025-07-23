import { addToCart,removeFromCart,fetchCartData } from "../controllers/cart.controller.js";
import { authMiddleware } from "../middlewares/auth.js";

import express from "express";
const cartRouter=express.Router();
cartRouter.post("/add",authMiddleware,addToCart);
cartRouter.post("/remove",authMiddleware,removeFromCart); 
cartRouter.get("/fetch",authMiddleware,fetchCartData); 

export  {cartRouter};