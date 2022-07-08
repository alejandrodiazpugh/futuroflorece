import React from 'react'
import heroStyles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={heroStyles.mainSection}>
        <div className={heroStyles.heroImg}></div>
        <section className={heroStyles.heroTitle}>
            <h1 className={heroStyles.heading}>EL PARTIDO QUE NOS <span className={heroStyles.headingEmphasis}>MERECEMOS</span></h1>
            <p className={heroStyles.text}>Una alternativa política a lo de siempre. Buscamos construir un Nuevo León que si se preocupe por sus habitantes.</p>
        </section>
    </div>
  )
}
