import express from "express"
import { registerUser } from "../controllers/user.controller.js";
import multer from "multer"
import { loginUser } from "../controllers/user.controller.js";
const userRouter=express.Router();

const upload=multer()

userRouter.post("/register",upload.none(),registerUser)

userRouter.post("/login",upload.none(),loginUser)


export {userRouter}