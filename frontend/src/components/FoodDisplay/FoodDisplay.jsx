import "./FoodDisplay.css"
import React,{useContext} from 'react'
import { StoreContext } from "../../context/StoreContext"
import FoodItem from "../FoodItem/FoodItem.jsx"

const FoodDisplay = ({category}) => {

    const  {foodList}=useContext(StoreContext)
    const filtered=foodList.filter(item=>item.category==category)
  return (
    <div className="food-display" id="food-display">
        <h2>Top Dishes near you</h2>
        <div className="food-display-list" id="food-display-list">
             { category=="All"?
                foodList.map((item,index)=>{
                    return(
                      
                         <FoodItem key={index} id={item._id}  name={item.name} description={item.description} price={item.price} image={item.image}/>
                        )
                      

                    
                })
            : filtered.map((item,index)=>{
                    return(
                      
                         <FoodItem key={index} id={item._id}  name={item.name} description={item.description} price={item.price} image={item.image}/>
                        )
                      

                    
                })

        }
        </div>
      
    </div>
  )
}

export default FoodDisplay
