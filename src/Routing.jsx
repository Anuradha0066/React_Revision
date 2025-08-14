import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
const Routing = () => {

     let navigate=useNavigate()
    let users=[{id:1,name:"anu"},{id:2,name:"rahul"},{id:3,name:"anuradha"}]

function done(id){
navigate(`/user/${id}`)
}
  return (
    <div>
      <h2>Users list</h2>
      {
      users.map((a)=>{
        return(
            <>
            <li onClick={()=>done(a.id)}>{a.name}</li>
            </>
        )
      })
      }
    </div>
  )
}

export default Routing
