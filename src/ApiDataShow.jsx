import React, { useState } from 'react'
import './Day10.css'
const ApiDataShow = ({input,cartData,SetCartData}) => {
console.log(input,"kyuuuu");

  


  function fun1(a){
  SetCartData([...cartData,a])
  SetActive(true)
  }
  return (
    <div>
       <div id='one'>
   {
     input.map((a,index)=>{
        return (
          <div>
       <div id='two' >
       <h5>{a.id }- {a.name}</h5>
       
    
       </div>
       </div>
        )
     })

     }  
    </div>
    </div>
  )
}

export default ApiDataShow
