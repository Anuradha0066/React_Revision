import React, { useMemo, useState } from 'react'

const Usememo = () => {
    let [count,SetCount]=useState(0)

    let val= useMemo(()=>{
      let data=0
      for(let i=0;i<100000000;i++){
        data+=i
      }
      return data
    },[])

  return (
    <div>
        <h4>{val}</h4>
      <h4 onClick={()=>SetCount(count+1)}>{count}</h4>
    </div>
  )
}

export default Usememo

//usememo return but useeffect not return