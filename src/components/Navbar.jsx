import React, { useState } from 'react'
import navStyles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'



export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClick = () => {
    setNavbarOpen(!navbarOpen)
  }

  const closeNavbar =() => {
    setNavbarOpen(false)
  }

  return (
    <header>
    <nav className={navStyles.navHeader}>
     <Link to={'/Inicio'} style={{lineHeight:'0'}} onClick={closeNavbar}> <img className={navStyles.logo} src={ logo } alt="" /> </Link>
     <button className={navStyles.button} onClick={handleClick}>{ navbarOpen ? <IoCloseSharp /> : <GiHamburgerMenu /> }</button>
      <ul className={navbarOpen ? `${navStyles.navLinks} ${navStyles.navLinksOpen}` : `${navStyles.navLinks} ${navStyles.navLinksClose}`}>
        <Link to={'/Inicio'} className={navStyles.navLink} onClick={closeNavbar}><li>Inicio</li></Link>
        <Link to={'/QuienesSomos'} className={navStyles.navLink} onClick={closeNavbar}><li>Quiénes Somos</li></Link>
        <Link to={'/DocumentosBasicos'} className={navStyles.navLink} onClick={closeNavbar}><li>Documentos Básicos</li></Link>
        <Link to={'/Sumate'} className={navStyles.navLink} onClick={closeNavbar}><li>Súmate</li></Link>
      </ul>
    </nav>
    </header>
  )
}