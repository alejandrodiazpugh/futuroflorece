import React from 'react'
import footerStyles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={footerStyles.container}>
      <div className={footerStyles.siteMap}>
        <h3 className={footerStyles.title}>MAPA DE SITIO</h3>
        <ul>
          <li className={footerStyles.title}>INICIO</li>
          <li className={footerStyles.title}>QUIÉNES SOMOS
            <ul>
              <li className={footerStyles.section}>Historia</li>
              <li className={footerStyles.section}>Principios</li>
            </ul>
          </li>
          
          <li className={footerStyles.title}>DOCUMENTOS BÁSICOS
            <ul>
              <li className={footerStyles.section}>Declaración de Principios</li>
              <li className={footerStyles.section}>Programa de Acción</li>
              <li className={footerStyles.section}>Estatutos</li>
            </ul>
          </li>
          <li className={footerStyles.title}>SÚMATE
            <ul>
              <li className={footerStyles.section}>Afiliación</li>
              <li className={footerStyles.section}>Voluntariado</li>
            </ul>
          </li>
        </ul>
      </div>
     <div className={footerStyles.SocialMedia}>
      <h3 className={footerStyles.title}>NUESTRAS REDES</h3>
     </div>
     <div className={footerStyles.contact}>
      <h3 className={footerStyles.title}>CONTÁCTANOS</h3>
     </div>
    </div>
  )
}
