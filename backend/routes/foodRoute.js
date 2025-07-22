import express from "express"
import { addFood } from "../controllers/food.controller.js"
import multer from "multer"
import { listFood } from "../controllers/food.controller.js";
import { removeFood } from "../controllers/food.controller.js";

const foodRouter=express.Router();

const upload=multer()





foodRouter.post("/add",upload.none(),addFood)
foodRouter.get("/list",upload.none(),listFood)
foodRouter.post("/remove",removeFood)

export  {foodRouter} 