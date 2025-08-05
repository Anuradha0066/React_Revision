import React, { useEffect, useState } from 'react'

import ApiDataStore from './ApiDataStore'

const Day10 = () => {
    let [input,SetInput]=useState([])

    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes`).then((res)=>{
            return res.json()
        }).then((data)=>{
            SetInput(data.recipes)
            console.log(data);
            
        })
    },[])

  return (
   <div>
    <ApiDataStore input={input}/>
   </div>
  )
}

export default Day10
