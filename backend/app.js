import express  from "express" 
import cookieParser from "cookie-parser";
import cors  from "cors"
const app=express();


app.use(cookieParser());
app.use(cors({
    origin:['http://localhost:5174',"http://localhost:5175","http://localhost:5173"],
    credentials:true

}))


app.use(express.json());
app.use(express.urlencoded({extended: true, limit: '16kb'}));
app.use(express.static('public'));

import {foodRouter} from "./routes/foodRoute.js";

app.use("/api/food",foodRouter);

import {userRouter} from "./routes/userRoute.js";

app.use("/api/user",userRouter)

import {cartRouter} from "./routes/cartRoute.js";
app.use("/api/cart",cartRouter);

import {orderRouter} from "./routes/order.route.js";
app.use("/api/order",orderRouter);

export{app}
