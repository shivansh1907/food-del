import React,{useContext} from 'react'
import "./PlaceOrder.css"
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'
const PlaceOrder = ( ) => {
  const {getTotalAmount}=useContext(StoreContext)
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='LastName'/>
        </div>
        <input type="email" placeholder='Email Adress' />
        <input type="text" placeholder='street' />
         <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State'/>
        </div>
         <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone' />
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
            <Link to="/order">  <button>PROCEED TO PAY</button></Link>
             
        </div>

      </div>
    </form>
  )
}

export default PlaceOrder
