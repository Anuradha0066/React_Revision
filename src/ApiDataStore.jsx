import React from 'react'
import './Day10.css'
const ApiDataStore = ({input}) => {
  return (
    <div>
       <div id='one'>
   {
     input.map((data)=>{
        return (
       <div id='two' >
        <button>add</button>
       <h5>{data.id }- {data.name}</h5>
       
       <img src={data.image} ></img>
      
       </div>
        )
     })

     }  
    </div>
    </div>
  )
}

export default ApiDataStore
