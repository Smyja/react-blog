import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => (
<div style={{
        display: 'flex',
        justifyContent: 'Space-around'
      }}>
          <NavLink to='/'> <h2>Posts</h2></NavLink>
          <NavLink to='/create'> <h2>Create a Post</h2></NavLink>
            <NavLink to='/about'> <h2>About</h2></NavLink>
            <NavLink to='/contact'> <h2>Contact</h2></NavLink>

     
          </div>
)

export default Navbar
