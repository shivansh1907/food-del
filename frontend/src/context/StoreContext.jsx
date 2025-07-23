import { createContext ,useState,useEffect} from "react";
import { food_list } from "../assets/assets.js";
import axios from "axios";


export   const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{

    const [token,setToken]=useState("");
    const [foodList,setfoodList]=useState(food_list);

    const [cartItems,setcartItems]=useState({});

    const addToCart=async(itemId)=>{
        if(!cartItems[itemId]){
            setcartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post("http://localhost:5000/api/cart/add",{itemId},{headers:{token}})

        }

    }

    const removeFromCart=async(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(token){
            await axios.post("http://localhost:5000/api/cart/remove",{itemId},{headers:{token}})
        }

    }

    const loadCartData=async(token)=>{
        const response=await axios.get("http://localhost:5000/api/cart/fetch",{},{headers:{token}})
        setcartItems(response.data.data);

    }

    const getTotalAmount=()=>{
        let totalamount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                 let itemInfo=foodList.find((product)=>product._id===item)
            totalamount+=itemInfo.price*cartItems[item]

            }
           
        }
        return totalamount;
    }
    useEffect(()=>{
        const storedToken=localStorage.getItem("token");
        if(storedToken){
            setToken(storedToken);
            
             
        }
    },[])
     

   




    const contextValue={
        foodList:food_list,
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