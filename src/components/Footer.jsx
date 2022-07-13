import React from 'react'
import footerStyles from './Footer.module.css'
import { FaFacebookSquare ,FaTiktok, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

export default function Footer() {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.siteMap}>
        <h3 className={footerStyles.title}>MAPA DE SITIO</h3>
        <ul className={footerStyles.flexContainer}>
          <li className={footerStyles.subtitle}>INICIO</li>
          <li className={footerStyles.subtitle}>QUIÉNES SOMOS
            <ul>
              <li className={footerStyles.section}>Historia</li>
              <li className={footerStyles.section}>Principios</li>
            </ul>
          </li>
          <li className={footerStyles.subtitle}>DOCUMENTOS BÁSICOS
            <ul>
              <li className={footerStyles.section}>Declaración de Principios</li>
              <li className={footerStyles.section}>Programa de Acción</li>
              <li className={footerStyles.section}>Estatutos</li>
            </ul>
          </li>
          <li className={footerStyles.subtitle}>SÚMATE
            <ul>
              <li className={footerStyles.section}>Afiliación</li>
              <li className={footerStyles.section}>Voluntariado</li>
            </ul>
          </li>
        </ul>
      </div>
     <div className={footerStyles.socialMedia}>
      <h3 className={footerStyles.title}>NUESTRAS REDES</h3>
      <ul className={footerStyles.socialLogos}>
        <li><a href="https://www.facebook.com/elfuturoflorece" target={"_blank"}><FaFacebookSquare className={footerStyles.socialLogo} /></a></li>
        <li><a href="https://www.instagram.com/elfuturoflorece/" target={"_blank"}><FaInstagram className={footerStyles.socialLogo} /></a></li>
        <li><a href="https://twitter.com/elfuturoflorece" target={"_blank"}><FaTwitter className={footerStyles.socialLogo} /></a></li>
        <li><a href="https://www.youtube.com/channel/UCoLSOliq_VpkACd6rheTDIA" target={"_blank"}><FaYoutube className={footerStyles.socialLogo} /></a></li>
        <li><FaTiktok className={footerStyles.socialLogo} /></li>
      </ul>
     </div>
     <div className={footerStyles.contact}>
      <h3 className={footerStyles.title}>CONTÁCTANOS</h3>
      <address className={footerStyles.address}>Ave. Siempreviva 742, Springfield, MO</address>
      <p className={footerStyles.address}>+52 666 6666 6666</p>
     </div>
    </div>
  )
}
