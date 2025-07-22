import { createContext ,useState,useEffect} from "react";
import { food_list } from "../assets/assets.js";


export   const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{

    const [token,setToken]=useState("");

    const [cartItems,setcartItems]=useState({});

    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setcartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }

    const removeFromCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalAmount=()=>{
        let totalamount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                 let itemInfo=food_list.find((product)=>product._id===item)
            totalamount+=itemInfo.price*cartItems[item]

            }
           
        }
        return totalamount;
    }


   




    const contextValue={
        food_list:food_list,
        cartItems:cartItems,
        setcartItems:setcartItems,
        addToCart:addToCart,
        removeFromCart:removeFromCart,
        getTotalAmount,
        token,
        setToken


    }

    return (

        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )





}


export default StoreContextProvider