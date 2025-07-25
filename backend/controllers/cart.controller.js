import { User } from "../models/user.model.js";
//add items to cart
const addToCart = async (req, res) => {
    try {
        let userData=await User.findOne({_id:req.userId})
        let cartData =await userData.cartData;
        if(!cartData[req.itemId]){
            cartData[req.itemId]=1
        }
        else{
            cartData[req.itemId]+=1;
        }
        await User.findByIdAndUpdate(req.userId,{cartData})
        return res.json({success:true,message:"item added to cart"})
         

        
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"item not added to cart"})
        
    }

}
//remove items from cart
const removeFromCart = async (req, res) => {
    try {
        let userData=await User.findOne({_id:req.userId});
        let cartData=await userData.cartData;

        if(cartData[req.itemId]){
            if(cartData[req.itemId]>1){
                cartData[req.itemId]-=1;
            }
            else{
                delete cartData[req.itemId]
            }
        }

        await User.findByIdAndUpdate(req.userId,{cartData})
        return res.json({success:true,message:"item removed from cart"  })

        
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"item not removed from cart"})   
        
    }
    
} 
//fetch user cart data
const fetchCartData = async (req, res) => {
    try {
        let userData=await User.findOne({_id:req.userId});
        let cartData= await userData.cartData;
        return res.json({success:true,data:cartData,})
        
    } catch (error) {
        console.log(error)
        return res.json({success:false,message:"error fetching cart data"}  )
        
    }
  
}

export {
    addToCart,
    removeFromCart,
    fetchCartData   
}