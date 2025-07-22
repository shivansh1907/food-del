import React from 'react'
import "./home.css"
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx'
import { useState } from 'react'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'

const Home = () => {
    const [category,setcategory]=useState("All")
  return (
    <div>
        <Header />
        <ExploreMenu  category={category} setcategory={setcategory}/>
        <FoodDisplay category={category}/>
       
      
    </div>
  )
}

export default Home
