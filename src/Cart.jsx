import React from 'react'

const Cart = ({cartData}) => {
  return (
    <div>
      <div id='one'>
   {
     cartData.map((data,index)=>{
        return (
       <div id='two' >
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

export default Cart
