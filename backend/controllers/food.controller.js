import { Food } from "../models/food.model.js";

import fs from "fs"


export const addFood=async(req,res)=>{


    console.log(req.body)


    const food=new Food({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        


    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
        
    } catch (error) {
        res.status(500)
        console.log(error)
        res.json({success:false,message:"Error"})
        
    }
 
}

export const listFood=async (req,res)=>{
    try {
        const foods=await Food.findById(req.body._id)
        res.json({success:true,data:foods})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"error"})
        
    }

}

//remove food item
export const removeFood=async(req,res)=>{
   try {
    const food=await Food.findById(req.body.id)
    await Food.findByIdAndDelete(req.body.id)
    res.json({success:true,messaage:"Food removed"})
   } catch (error) {
    console.log(error)
    res.json({success:false})
    
   }
}


