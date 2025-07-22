import { useState } from 'react'
import Navbar from './components/sidebar/Navbar/Navbar.jsx'
import Sidebar from './components/sidebar/sidebar.jsx'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/add/Add.jsx'
import List from './pages/List/List.jsx'
import Order from './pages/Orders/Order.jsx'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {


  return (
    
    <div>
      <ToastContainer/>
      <Navbar />
      <hr />
      <div className="app-contents">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/orders" element={<Order/>}/>
        </Routes>

      </div>
     
    </div>
  )
}

export default App
