import React,{useContext,useState,useEffect} from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'
import { use } from 'react'
import axios from "axios"
const PlaceOrder = ( ) => {
  const url="http://localhost:5000"
  const {getTotalAmount,token,foodList,cartItems}=useContext(StoreContext)
  const [data,setData]= useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",

    zipCode:"",
    country:"",
    phone:""
  })
  const placeOrder=async(e)=>{
    e.preventDefault()
    let orderItems=[]
    foodList.map((item)=>{
      if(cartItems[item._id]>0){
        let iteminfo=item
        iteminfo["quantity"]=cartItems[item._id]
        orderItems.push(iteminfo)
      }
    })

    console.log(orderItems)
    let orderData={
      address:data,
      items:orderItems,
      totalAmount:getTotalAmount()+2,
    }
    let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}}  )
    if(response.data.success){
      const {session_url}=response.data
      window.location.replace(session_url)

    }
     

    


  }

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData((prev)=>({...prev,[name]:value}))
  }

  // useEffect(()=>{
  //   console.log(data) 
  // },[data])
  return (
    <form action="" onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input required type="text" placeholder='First Name' onChange={handleChange} name="firstName" value={data.firstName} />
          <input required type="text" placeholder='LastName' onChange={handleChange} name="lastName" value={data.lastName}/>
        </div>
        <input type="email" placeholder='Email Adress' onChange={handleChange} name="email" value={data.email} />
        <input type="text" placeholder='street' onChange={handleChange}  name="street" value={data.street} />
         <div className="multi-fields">
          <input required type="text" placeholder='City' onChange={handleChange} name="city" value={data.city} /> 
          <input required type="text" placeholder='State' onChange={handleChange} name="state" value={data.state}/>
        </div>
         <div className="multi-fields">
          <input required type="text" placeholder='Zip Code' onChange={handleChange} value={data.zipCode} name="zipCode" />
          <input required type="text" placeholder='Country' onChange={handleChange} name="country" value={data.country}/>
        </div>
        <input required type="text" placeholder='Phone'  onChange={handleChange} name="phone" value={data.phone}/>
      </div>
      <div className="place-order-right">
         <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery fee</p>
                <p>${2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalAmount()+2}</b>
              </div>
              <hr />
              
            </div>
              <button type="submit">PROCEED TO PAY</button>
             
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder
