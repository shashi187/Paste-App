import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex gap-4 place-content-evenly'>
      <NavLink 
      to="/">
        Home
      </NavLink>
      <NavLink 
      to="paste">
        Pastes
      </NavLink>
    </div>
  )
}

export default NavBar
