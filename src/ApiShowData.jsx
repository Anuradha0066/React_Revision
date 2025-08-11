import React, { useContext } from 'react'
import { Context } from './Context'
import {Link} from 'react-router-dom'
import './ApiShow.css'
const ApiShowData = () => {
  let{state,dispatch}= useContext(Context)

  
  return (
    <div>
       <Link to={'/cart'}>
            <button>Cart</button>
            </Link>
     <div id='one'>
   {
     state.data.map((a,index)=>{
        return (
          <div>
           
       <div id='two' >
      
       <img src={a.image}></img>
       <p>{a.name}</p>
        <button onClick={()=>{dispatch({type:"addToCart",payload:a})}}>click</button>
       </div>
       </div>
        )
     })

     } 
     
    </div> 
      </div>
  )
}

export default ApiShowData
