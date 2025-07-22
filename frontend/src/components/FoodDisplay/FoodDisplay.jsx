import "./FoodDisplay.css"
import React,{useContext} from 'react'
import { StoreContext } from "../../context/StoreContext"
import FoodItem from "../FoodItem/FoodItem.jsx"

const FoodDisplay = ({category}) => {

    const  {food_list}=useContext(StoreContext)
    const filtered=food_list.filter(item=>item.category==category)
  return (
    <div className="food-display" id="food-display">
        <h2>Top Dishes near you</h2>
        <div className="food-display-list" id="food-display-list">
             { category=="All"?
                food_list.map((item,index)=>{
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
