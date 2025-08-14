import React from 'react'
import {useParams} from 'react-router-dom'

const R_userDetails = () => {
let users=[{id:1,name:"anu"},{id:2,name:"rahul"},{id:3,name:"anuradha"}]
let {id}=useParams()

let userData=users.find((a)=>{
  return a.id==id
})
  return (
    <div>
      <h2>UserDetails</h2>
      <h5>{userData.id}</h5>
        <h5>{userData.name}</h5>
    </div>
  )
}

export default R_userDetails
