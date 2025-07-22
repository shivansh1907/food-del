import React, { useEffect,useState } from 'react'
import "./List.css"
import axios from "axios"
import { toast } from 'react-toastify'

const List = () => {
    const [list,setlist]=useState([])
    const url="http://localhost:5000"

    const fetchList=async()=>{
        const response=await axios.get(`${url}/api/food/list`)
        console.log(response.data)
        if(response.data.success){
            setlist(response.data.data)


        }
        else{
            toast.error("Error")
        }

    }

    useEffect(()=>{
        fetchList();

    },[])
  return (
    <div>
      
    </div>
  )


}

export default List
