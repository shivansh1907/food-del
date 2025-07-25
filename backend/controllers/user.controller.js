import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";



    // async function generateAccessandRefreshToken(user_id, res) {

    //     const user = await User.findById(user_id);
    //     if (!user) {
    //         throw new Error("User not found");
    //     }
    //     const accessToken = user.generateAccessToken(user_id);
      

       
    //     await user.save({ validateBeforeSave: false });
    //     return {
    //         accessToken,
          
    //     };


    // }

const registerUser=async (req,res)=>{
    console.log(req.body)

    const {username,email,password}=req.body;

    if(!email || !username || !password){
        return res.status(400).json({
            success:false,
            message:"all fields required"
        })

        
    }

    //step 2
    const existedUser= await User.findOne({
            $or:[{username},{email}]
        })
        if(existedUser){
            res.status(400).json({
                success:false,
                message:"user already exists"

            })
        }

        //step 3

         const user =await User.create({
             username,
              email,
              password,
        })
      
        


         
      
       

   

    const createdUser=await User.findById(user._id).select("-password,-refreshToken")

    if(!createdUser){
        res.status(500).json({
            success:false,
            message:"user creation failed"
        })

       
    }

   const token=await user.generateAccessToken()

     res.status(200).json({
            success:true,
            message:"user created successful",
          token

        })


}

const loginUser=async(req,res)=>{
    const {email,password}=req.body
    if(!email){
       return res.status(400).json({
            success:false,
            message:"all fields are required"
        })
    }

    const user= await User.findOne({
       email
    })

    if(!user){
        return res.status(400).json({
            success:false,
            message:"user doesnt exist"
        })
    }

    const isPasswordValid=await user.ispasswordCorrect(password)

    if(!isPasswordValid){
        return res.status(400).json({
            success:false,
            message:"Invalid password"
        })

    }
    const token=await user.generateAccessToken()
    res.status(200).json({
        success:true,
        message:"user logged in successfully",
        token,
        user:await User.findById(user._id).select("-password")
    })

}

   

















export{registerUser,
    loginUser
}