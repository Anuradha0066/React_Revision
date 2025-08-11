import React,{useContext} from 'react'
import {Context} from './Context'

const Cart = () => {
    let   {state,dispatch}= useContext(Context)

    console.log(state.cartData,"mai hu don");
    
  return (
    <div id='one'>
      {state.cartData.map((a,index)=>{
        return(
          <div id='two'>
            
            <img src={a.image} ></img>
            <p>{a.name}</p>
            <button onClick={()=>dispatch({type:"del",payload:index})}>delete</button>
           
           
            </div>
        )
      })}

    </div>
  )
}

export default Cart
