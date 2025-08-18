import React, { memo,useCallback,useMemo,useState } from 'react'

const MemoFunc = () => {
    let[count ,SetCount]=useState(0)
    let[state,setState]=useState(0)

    console.log("main");

    // let even= useMemo(()=>{
    //   return ()=>{
    //     console.log("hello");
        
    //   }
    // },[])

   let even= useCallback(()=>{
      console.log("hello");
      
    },[])
    
  return (
    <div>
        <h5>{count}</h5>
      <button onClick={()=>SetCount(count+1)}>click</button>
      <button onClick={()=>setState(state-1)}> --</button>
      <Memoized  even={even}/>
    </div>
  )
}

export default MemoFunc



let Memoized= memo(function Child  ()  {
    console.log("child");
    
  return (
    <div>
      child
    </div>
  )
})


// useMemo= value or function ko memoize karta h 
// memo function= component ko memoize/optimize karta h
