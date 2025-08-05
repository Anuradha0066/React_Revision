import React, { useReducer } from 'react'

const Day7 = () => {
    function reducer(count,action){
        if(action.type=="incr"){
           return count+1;
        }
        else if(action.type=='decre'){
           return count-1;
        }
        else{
            return 0;
        }
    }
    let[count,dispatch]=useReducer(reducer,0)

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>{dispatch({type:"incr"})}}>incre</button>
      <button onClick={()=>{dispatch({type:"decre"})}}>decre</button>
      <button onClick={()=>{dispatch({type:"res"})}}>reset</button>
    </div>
  )
}

export default Day7
