import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='header'>
        <div className='navbar'>
            <NavLink to='/home'><div className='nav'>
                Home
                </div></NavLink>
            <NavLink to='/about'><div className='nav'>
                About
                </div></NavLink>
           {/* <NavLink to='/contact'><div className='nav'>
            Contact
            </div></NavLink> */}
        </div>
      
    </div>
  )
}

export default Navbar
