
// import React from 'react'
// import './App.css'


// const App = () => {
//   let arr=[1,2,3,4,5] 
//   function fun1(){
//     console.log("hehehehe");
    
//   }
//   return (
//     // <div>
//     // <button  onClick={fun1}>click</button>
//     // </div>
//     <div>App 
//       {
//         arr.map((a)=>{
//           return(<>
//           <h1> {a}</h1>
//           </>)
//         })
//       }
//     </div>
//   )
// }


// // const Home=()=>{
// //   return(
// //     <div>
// //       <h2> Home Compoo</h2>
// //     </div>
// //   )

// // }
// // export {Home}


// export default App




// import React from 'react'
// import Day2 from './Day2'
// import Day3 from './Day3'
// import Day4 from './Day4'
// import Todo from './Todo'
// import Day5 from './Day5'

// const App = () => {
//   let user="hello"
//   return (
//     <div>
//       {/* <Day3/> */}
//       {/* <Day4 data={user}/> */}
//       {/* <Todo/> */}
//       <Day5/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Navbar from './Navbar'
// import{ Route,Routes} from 'react-router-dom'
// import Home from './Home'
// import Contact from './Contact'
// import About from './About'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}></Route>
//         <Route path='/contact' element={<Contact/>}></Route>
//         { <Route path='/about' element={<About/>}></Route> }
//       </Routes>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Home from  './Home'
// import { Route,Routes } from 'react-router-dom'
// import Login from './Login'
// import SignUp from './SignUp'
// import Navbar from './Navbar'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Routes>
//         <Route path='/' element={<Home/>}></Route>
//       <Route path='/login' element={<Login/>}></Route>
//       <Route path='/signup' element={<SignUp/>}></Route>
//       </Routes>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Day7 from './Day7'

// const App = () => {
//   return (
//     <div>
//       <Day7/>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import Todo_Reducer from './Todo_Reducer'
// import Day9 from './Day9'
// import Day10 from './Day10'
// import Day10Cus from './Day10Cus'
// import {Route,Routes} from 'react-router-dom'
// import Cart from './Cart'
// const App = () => {
// let[input,SetInput]=useState([])
//   let[cartData,SetCartData]=useState([])
//   console.log(input,"appp");
  
//   return (
//     <div>
//       {/* <Todo_Reducer/> */}
//       {/* <Day9/> */}
//       <Routes>
//         <Route path='/cart' element={<Cart cartData={cartData}></Cart>}></Route>
//        <Route path='/' element={<Day10 input={input} cartData={cartData} SetCartData={SetCartData} SetInput={SetInput}/>}></Route>

//       </Routes>
//       <Day10/>
//       {/* <Day10Cus/> */}
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Routing from './Routing'
// import R_userDetails from './R_userDetails'
// import { Route,Routes } from 'react-router-dom'
// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Routing/>}></Route>
//         <Route path='/user/:id' element={ <R_userDetails/>}></Route>
//       </Routes>
    
//     </div>
//   )
// }

// export default App


import React from 'react'
import Usememo from './Usememo'
import MemoFunc from './MemoFunc'
import UseRef from './UseRef'
import LazyLoading from './LazyLoading'

const App = () => {
  return (
    <div>
      {/* <Usememo/> */}
      {/* <MemoFunc/> */}
      {/* <UseRef/> */}
      <LazyLoading/>
    </div>
  )
}

export default App
