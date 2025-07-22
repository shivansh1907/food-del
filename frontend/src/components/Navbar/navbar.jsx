import React ,{useState} from 'react'
import "./navbar.css"
import { assets } from '../../assets/assets'
import {Link} from "react-router-dom"



const Navbar = ({setshowLogin}) => {

    const [menu,setmenu]=useState("menu")
    const handleClick=(e)=>{
        setmenu(e.currentTarget.innerText)
    }

    const handleSign=()=>{
        setshowLogin(true)


    }
  return (
    <div className="navbar">
        <Link to="/">
        <img className="logo" src={assets.logo} alt="logo" />
        </Link>
        <ul className="navbar-menu">
            <Link to="/" onClick={handleClick} className={menu=="home"?"active":""}>home</Link>
            <a href="#food-display-list" onClick={handleClick}  className={menu=="menu"?"active":""}>menu</a>
            <li onClick={handleClick}  className={menu=="mobile-app"?"active":""}>mobile-app</li>
            <li  onClick={handleClick} className={menu=="contact-us"?"active":""}>contact-us</li>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="search-icon" />
            <div className="navbar-search-icon">
                <Link to="/cart"> <img onClick={()=>{setmenu("cart")}} className={menu=="cart"?"active":""} src={assets.basket_icon} alt="basket-icon" />
               
                </Link>
                <div className="dot"></div>
            </div>
            <button onClick={handleSign}>Sign in</button>
        </div>

      
    </div>
  )
}

export default Navbar
