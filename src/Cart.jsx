import React,{useContext} from 'react'
import {Context} from './Context'
const Cart = () => {
    let   {state,dispatch}= useContext(Context)

    console.log(state.cartData,"mai hu don");
    
  return (
    <div>
      {state.cartData.map((a)=>{
        return(
          <div>
            <h2>{a.name}</h2>
            <img src={a.image} height='100px'></img>
           
           
            </div>
        )
      })}

    </div>
  )
}

export default Cart
