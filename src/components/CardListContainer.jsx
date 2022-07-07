import React from 'react'
import CardGrid from './CardGrid'
import styles from './CardListContainer.module.css'

export default function CardListContainer() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>BUSCANDO UNA ALTERNATIVA CIUDADANA REAL</h2>
        <CardGrid />
    </div>
  )
}
