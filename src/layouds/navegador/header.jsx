import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export const Nav = () => {
  return (
    <div className='NavBar'>
            <ul className='ulHome'>
              <Link className='anchor' to="/">INICIO</Link>
              <Link className='anchor' to="/About">¿QUIÉN SOY?</Link>
              <Link className='anchor' to="/Servicios">SERVICIOS</Link>
              <Link className='anchor' to="/Contactame">CONTÁCTAME</Link>
            </ul>
            <div className="DivLogo">
              <p className="Logo">AbogadaOnline</p>
              {/* <img src={logo} className="Logo" alt="logo" /> */}
            </div>
    </div>
  )
}

export default Nav;