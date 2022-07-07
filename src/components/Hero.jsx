import React from 'react'
import heroStyles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={heroStyles.mainSection}>
        <div className={heroStyles.heroImg}></div>
        <section className={heroStyles.heroTitle}>
            <h1 className={heroStyles.heading}>EL PARTIDO QUE NOS <span className={heroStyles.headingEmphasis}>MERECEMOS</span></h1>
            <p className={heroStyles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus pharetra fringilla. Phasellus eleifend egestas est eu consectetur. </p>
        </section>
    </div>
  )
}
