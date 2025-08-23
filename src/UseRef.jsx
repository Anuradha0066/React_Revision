// import React, { useEffect, useState,useRef } from 'react'

// const UseRef = () => {
//     let[myData,SetMyData]=useState("")
//     // let[count,setCount]=useState(0)
//     let data=useRef(0)
//     console.log(data,"hello");
    
//     useEffect(()=>{

//         data.current=data.current+1;
//         // setCount(count+1)
//     })
//   return (
//     <div>
//       <input type='text' value={myData} onChange={(e)=>SetMyData(e.target.value)}></input>
//     {/* <p>{count}</p> */}
//     <p>{data.current}</p>
//     </div>
//   )
// }

// export default UseRef


import React from 'react'

const UseRef = () => {
let data=useRef(null)

  return (
    <div>
      <input></input>
    </div>
  )
}

export default UseRef
