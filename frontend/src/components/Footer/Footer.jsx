import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, nulla!
                </p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="content-center">
                <h2>COMPANY</h2>
                <ul>
                    <Link to="/">Home</Link>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>privacy policy</li>
                </ul>
            </div>
            <div className="content-right">
                <h2>GET IN TOUCh</h2>
                <ul>
                    <li>+918383993993</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />

        <p className="footer-copyright"></p>

      
    </div>
  )
}

export default Footer
