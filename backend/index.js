import {connectDB} from "./DB/db.js";
import { app } from "./app.js";
import dotenv from "dotenv"


dotenv.config({
    path:'./.env'
});


connectDB()
.then(()=>{
    app.listen(5000,()=>{
        console.log("database connection successful");
        
        console.log(`server is listenin on port  ${5000}`);
        
    })
})
.catch((error)=>{
    console.log("error connectin to database");
    
})

app.get("/",(req,res)=>{
    res.send("API WORKING")
})