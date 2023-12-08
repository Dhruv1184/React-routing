import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
const NavBar = () => {
  return (
    <div className='nav' style={{backgroundColor:'black'}}>
      <Link to='/' className='Link'>Kalvium❤️</Link>
      <Link to='/About' className='Link a'>About</Link>
      <Link to='/Contact' className='Link b'>Contact</Link>
    </div>
  )
}

export default NavBar
