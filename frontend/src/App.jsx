import Navbar from "./components/Navbar/navbar.jsx"
import { Routes,Route } from "react-router-dom"
import Cart from "./pages/cart/cart.jsx"
import Home from "./pages/home/home.jsx"
import PlaceOrder from "./pages/placeOrder/PlaceOrder.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Login from "./components/Login/Login.jsx"
import { useState } from "react"
function App() {

  const [showLogin,setshowLogin]=useState(false);

  
  return (
    <>
    <Login showLogin={showLogin} 
          setshowLogin={setshowLogin}
    />
   <div className="app">
    <Navbar setshowLogin={setshowLogin} />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
       <Route path="/order" element={<PlaceOrder />}/>

    </Routes>
   
   </div>
    <Footer />
    </>
  )
}

export default App
