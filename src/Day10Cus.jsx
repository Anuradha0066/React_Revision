import React from 'react'
import useCustom from './CustomHook'

const Day10Cus = () => {
    let {count,incre,decre}=useCustom()
  return (
    <div>
        <h5>{count}</h5>
      <button onClick={incre}>++</button>
      <button onClick={decre}>--</button>
    </div>
  )
}

export default Day10Cus
