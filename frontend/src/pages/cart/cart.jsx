import React,{useContext} from 'react'
import "./cart.css"
import { StoreContext } from '../../context/StoreContext'
import {Link} from "react-router-dom"

const Cart = () => {
  const {cartItems,foodList,removeFromCart,getTotalAmount}=useContext(StoreContext)
  return (
    !cartItems?null:(
    <div className="cart">
      <div className="cart-items">

        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {foodList.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div key={index}>
                    <div className="cart-items-title cart-items-item">
            
            <img src={item.image} alt="" />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{cartItems[item._id]}</p>
            <p>${item.price*cartItems[item._id]}</p>
            <p  onClick={()=>removeFromCart(item._id)} className='cross'>x</p>


              </div>
              <hr />
              </div>
          
            )
          }

        })}
        <div className="cart-bottom">
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
                <p>${getTotalAmount()==0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalAmount()==0?0:getTotalAmount()+2}</b>
              </div>
              <hr />
              
            </div>
            <Link to="/order">  <button>PROCEED TO CHECKOUT</button></Link>
             
        </div>
        <div className="cart-promocode">
          <p>if you have promocode add it here</p>
          <div className='cart-promocode-input'>
            <input type="text" placeholder="promo code" /> 
           <button>submit</button>

          </div>
        </div>
          </div>
         
        
      </div>
        
      
    </div>
    )
  )
}

export default Cart
