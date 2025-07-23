import jwt from "jsonwebtoken";

const authMiddleware=(req,res,next)=>{
    const token=req.headers.token;
    if(!token){
        return res.json({
            message:"Not authorized login again",
            success:false
        })

    }

    try {
        const decoded_token=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        req.userId=decoded_token._id;
        next();
        
    } catch (error) {
        console.log(error)
        return res.json({
            message:"error",
            success:false
        })
        
    }

}
export {authMiddleware};