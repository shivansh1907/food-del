import React ,{useState,useContext} from 'react'
import { StoreContext } from '../../context/StoreContext'
import "./navbar.css"
import { assets } from '../../assets/assets'
import {Link} from "react-router-dom"



const Navbar = ({setshowLogin}) => {
    const {setToken,token}=useContext(StoreContext)
    const [profile,setProfile]=useState(false)
    

    const [menu,setmenu]=useState("menu")
    const handleClick=(e)=>{
        setmenu(e.currentTarget.innerText)
    }
    const handleProfile=()=>{
        setProfile(!profile)
    }

    const handleSign=()=>{
        setshowLogin(true)


    }
    const logout=()=>{
        localStorage.removeItem("token")
        setToken("")        
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
            {!token?
            <button onClick={handleSign}>Sign in</button>
            :<div className="navbar-user">
                <img src={assets.profile_icon} alt="" onClick={handleProfile}/>
               { profile?<ul className="profile-options">
                    <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                    <hr />
                    <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>logout</p></li>
                </ul>:null}
                </div>}
        
        </div>

      
    </div>
  )
}

export default Navbar
