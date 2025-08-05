import React, { useEffect, useState } from 'react'
import './Day5.css'

const Day5 = () => {
    let [count,SetCount]=useState(0);
    let [input,SetInput]=useState([]);

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos`).then((res)=>{
           return res.json()
        }).then((data)=>{
            SetInput(data)
            console.log(data);
            
        })
        
    },[])

    function d(index){
      let arr=input.filter((a,id)=>{
        return id != index
      })
      SetInput(arr)
    }

    function dataSave(a){
      localStorage.setItem("key",JSON.stringify(a))
    }

  return (
    <div id='parent'>
      {/* <button onClick={()=>SetCount(count+1)}>count {count}</button> */}
      {
        input.map((a,index)=>{
            return(
                <div id='one' > 
                <h5>{a.id}</h5>
                <h5>{a.title}</h5>
                <button onClick={()=>d(index)}>del</button>
                {/* <button onClick={ ()=>{
                  const obj={title:a.title , userId:a.userId};
                 localStorage.setItem(`data:${a.id}`,JSON.stringify(obj))}}>add</button>
                */}

                <button onClick={()=>dataSave(a)}>add</button>
                 </div>
            )
        })
      }
    </div>
  )
}

export default Day5
