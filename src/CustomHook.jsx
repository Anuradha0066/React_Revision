import React, { useState } from 'react'

const CustomHook = () => {
    let [count,SetCount]=useState(0)
    const incre=()=>{SetCount(count+1)}
    const decre=()=>{SetCount(count-1)}
  return {
    count,incre,decre
  }
}

export default CustomHook
