import React from 'react'
import donationsStyles from './DonationsBanner.module.css'
import Button from './Button'

export default function DonationsBanner() {
  return (
    <>
    <div className={donationsStyles.overlay}>
        <h2 className={donationsStyles.title}>CON TU APOYO, EN NUEVO LEÓN <span>EL FUTURO FLORECE</span></h2>
        <div className={donationsStyles.group}>
        <p className={donationsStyles.text}>Si deseas apoyar a un partido verdaderamente independiente, y ser parte del cambio en la política de México, puedes hacerlo con un donativo a la causa. </p>
        <div className={donationsStyles.btn}><Button text={'dona aquí'} btnType={'button'} variant={'btnRounded'}/> </div>
        </div>
        
    </div>
    <div className={donationsStyles.bannerHero}></div>
    </>
  )
}
