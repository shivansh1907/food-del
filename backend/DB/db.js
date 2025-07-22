import mongoose from "mongoose"
const  connectDB= async ()=>{
    try{
       const conn= await mongoose.connect('mongodb+srv://2023ume1733:uEtUQkDu71Qz0uB3@cluster0.4cdh3xa.mongodb.net/food-del')
        
    } catch(error){
        console.log("error connectin to database",error);
        throw error;
        
    }
}

export  {connectDB}