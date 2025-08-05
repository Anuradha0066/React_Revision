import React, { useReducer, useState } from 'react'

const Todo_Reducer = () => {
let initialValue={
      input:"",
      todo:[]
    }
    function reducer(state,action,index){
    if(action.type=="add"){
             return{
              ...state,
              input:action.payload
             }
    }
    else if(action.type=="add_item"){
      if(state.input.trim()==''){
        return;
      }
      else{
        return{
          ...state,
          todo:[...state.todo,state.input],
          input:""
        }
      }
    }
    else if(action.type=="del"){
    return{
       ...state,
       todo:['']
  }
  }
    }
    
    
    
    let [state,dispatch]=useReducer(reducer,initialValue);

  return (
    <div>
      <input type='text' value={state.input} onChange={(e)=>{dispatch({type:"add",payload:e.target.value})}} placeholder='Enter to-do'></input>
      <button onClick={()=>{dispatch({type:"add_item"})}}>submit</button>
      {
        state.todo.map((a,index)=>{
          return(
            <>
            <h4>{a}</h4>
             <button onClick={()=>{dispatch({type:"del",payload:index})}}>del</button>
            </>
          )
        })
      }


    </div>
  )
}

export default Todo_Reducer
