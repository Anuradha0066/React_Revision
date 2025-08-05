import React, { useState } from 'react'

const Todo = () => {
    const[input,SetInput]=useState("")
    let [data,SetData]=useState([])
    function fun1(){
     SetData([...data,input])
     console.log(data);
     SetInput("")
     
    }
    function fun2(index){
        const newArr=data.filter((a,id)=>{
          return id!= index
        })
        SetData(newArr)
    }
  return (
    <div>
      <input name='input' value={input} onChange={(e)=>SetInput(e.target.value)} placeholder='Enter todo'></input>
      <button onClick={fun1}>add</button>
      {
        data.map((a,index)=>{
          return(
            <>
            <li>{a}</li>
            <button onClick={()=>fun2(index)}>del</button>
            </>
          )
        })
      }
    </div>
  )
}

export default Todo
