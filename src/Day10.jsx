import React, { useEffect, useState } from 'react'

import ApiDataShow from './ApiDataShow'
import { Link } from 'react-router-dom'

const Day10 = ({input,SetInput,cartData,SetCartData}) => {
 
    
    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes`).then((res)=>{
            return res.json()
        }).then((data)=>{
            SetInput(data.recipes)
            console.log(data.recipes,"apiiiii");
            
        })
    })

  return (
   <div>
    <Link to={'/cart'}>
    <button>cart</button>
    </Link>
    <ApiDataShow input={input} cartData={cartData}  />
   </div>
  )
}

export default Day10
