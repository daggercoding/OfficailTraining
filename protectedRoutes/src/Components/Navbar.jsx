import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
     <Link to="/">Home</Link>
     <Link to="/about">About</Link>  
     <Link to="/dashboard">Dashboard</Link>  
     <Link to="/login">Login</Link>
     <Link to="/signup">Signup</Link>  
    </nav> 
  )
}

export default Navbar
