import React from 'react'
import "./Login.css"
import { StoreContext } from "../../context/StoreContext"
import {useState,useEffect,useContext} from "react"
import { assets } from '../../assets/assets'
import axios from "axios"


const Login = ({showLogin,setshowLogin}) => {
  const url="https://food-del-backend-1oh9.onrender.com"
  const {setToken}=useContext(StoreContext)

  const [currState,setcurrState]=useState("sign up")
  const [details,setdetails]=useState({
    username:"",
    email:"",
    password:""

  })
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setdetails((det)=>({...det,[name]:value}))
  }

  useEffect(()=>{
    console.log(details)

  },[details])
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const formData=new FormData()
    let newUrl=url;
    if(currState==="sign up"){
      newUrl+="/api/user/register"
       
    formData.append("username",details.username);
    formData.append("email",details.email);
    formData.append("password",details.password);
    }
    else{
      newUrl+="/api/user/login"
      formData.append("email",details.email);
      formData.append("password",details.password);
    }

    const response=await axios.post(`${newUrl}`,formData)
    if(response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token);
      setshowLogin(false)
    }
    else{
      alert(response.data.message)
    }



  }
  return (
    showLogin === true ? (
      <div className="login">
        <form action="" className="login-pop-up-container" onSubmit={handleSubmit} >
          <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>{
              setshowLogin(false)
            }}src={assets.cross_icon} alt="" />
          </div>
          <div className="login-popup-input">
            {currState=="sign up"?
            <input type="text" placeholder='your name' required name="username" onChange={handleChange} value={details.username}/>:null
            }


            <input type="email" placeholder='your email' required  onChange={handleChange} name="email" value={details.email}/>
            <input type="password" placeholder='password' required  onChange={handleChange} name="password" value={details.password} />
            <button>{currState=="sign up"?"Create account":"Login"}</button>
           {currState=="sign up"?<p onClick={()=>{
              setcurrState("Sign in")
            }}>Already a customer? sign in</p>:<p onClick={()=>{
              setcurrState("sign up")
            }}>
              Dont't have an account?Sign up
            </p>
            }

          </div>
        </form>
      </div>
    ) : null
  )
}

export default Login
