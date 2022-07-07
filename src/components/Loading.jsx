import React from 'react'
import loadingStyles from './Loading.module.css'

export default function Loading() {
  return (
    <div className={loadingStyles.container}>
      <h3 className={loadingStyles.title}>Cargando...</h3>
      <div className={loadingStyles.animation}></div>
    </div>
  )
}
