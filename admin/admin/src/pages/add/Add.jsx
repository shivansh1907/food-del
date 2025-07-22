import React,{useEffect, useState} from 'react'
import "./add.css"
import axios from "axios"
import { toast } from 'react-toastify'



  
  

const Add = () => {
    const url="http://localhost:5000";
    const [data,setdata]=useState({
        name:"",
        description:"",
        price:"",
        category:"Salads"


         
    })
    const handleChange=(e)=>{
        const name =e.target.name
        const value=e.target.value
        setdata((data)=>({...data,[name]:value}))

    }
   
    const onSubmitHandler=async (e)=>{
        e.preventDefault()
        const formData=new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        const response =await  axios.post(`${url}/api/food/add`,formData)
        if (response.data.success) {
            setdata({
                name:"",
                description:"",
                price:"",
                category:"Salads"


               
            })
            toast.success(response.data.message)
            

            
        } 
        else{
            console.log("error")
        }          

        

     



    }

    
  return (
    <div className="add">
        <form action="" onSubmit={onSubmitHandler} className="flex-col">
<div className="add-product-name flex-col">
    <p>Product name</p>
    <input onChange={handleChange} value={data.name} type="text" name="name" placeholder='Type here' />

</div>
<div className="add-product-description">
    <p>Product description</p>
    <textarea onChange={handleChange}value={data.description} name="description" rows="6" placeholder="Write content here" id=""></textarea>

</div>
<div className="add-category-price">
    <div className="add-category flex-col">
        <p>Product category</p>
        <select onChange={handleChange}  value={data.category} name="category" id="">
            <option value="Salads">Salads</option>
            <option value="Rolls">Rolls</option>
            <option value="sandwich">sandwich</option>
            <option value="cake">Cake</option>
            <option value="Pure veg">Pure veg</option>
            <option value="Pasta">Pasta</option>
            <option value="deserts">Dessets</option>
            <option value="Noodles">Noodles</option>

        </select>

    </div>
    <div className="add-price flex-col">
        <p>Product price</p>
        <input onChange={handleChange} value={data.price} type="Number" name="price" placeholder='$20' />
    </div>
</div>

<button type="submit" className="add-btn">ADD</button>

        </form>
      
    </div>
  )
}

export default Add
