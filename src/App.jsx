import React from 'react'
import ApiShowData from './ApiShowData'
import Cart from './Cart'
import { Route,Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
     <Route path='/cart' element={<Cart ></Cart>}></Route>
       <Route path='/' element={<ApiShowData />}></Route>
      </Routes>
    </div>
  )
}

export default App
