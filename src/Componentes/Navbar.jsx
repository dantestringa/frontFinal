import { Link } from 'react-router-dom'
import React from 'react'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT</Link>
        <Link to='/productos'>PRODUCTOS</Link>
        <Link to='/api'>API</Link>
        <Link to='/formulario'>FORMULARIO</Link>
    </div>
  )
}

export default Navbar