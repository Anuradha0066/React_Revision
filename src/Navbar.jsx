import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      {/* <div id='navbar'>
      <Link to='/'>
      <li>Home</li>
      </Link>
      <Link to='/contact'>
      <li>Contact</li></Link>
       <Link to='/about'>
      <li>About</li></Link>
      </div> */}

       
      <Link to='/'>
      <li>Home</li>
      </Link>
      <Link to='/Login'>
      <h5>Login</h5>
      </Link>

      <Link to='/signup'>
      <h5>SignUp</h5>
      </Link>
    </div>
  )
}

export default Navbar
