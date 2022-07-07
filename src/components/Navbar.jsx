import React from 'react'
import navStyles from "./Navbar.module.css"
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'



export default function Navbar() {
  return (
    <nav className={navStyles.navHeader}>
     <Link to={'/Inicio'} style={{lineHeight:'0'}}> <img className={navStyles.logo} src={ logo } alt="" /> </Link>
      <ul className={navStyles.navLinks}>
        <Link to={'/Inicio'} className={navStyles.navLink}><li>Inicio</li></Link>
        <Link to={'/QuienesSomos'} className={navStyles.navLink}><li>Quiénes Somos</li></Link>
        <Link to={'/DocumentosBasicos'} className={navStyles.navLink}><li>Documentos Básicos</li></Link>
        <Link to={'/Sumate'} className={navStyles.navLink}><li>Súmate</li></Link>
      </ul>
    </nav>
  )
}
