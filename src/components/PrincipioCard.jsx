import React from 'react'
import styles from "./PrincipioCard.module.css"

export default function PrincipioCard({ principle }) {
    const { id, name, color } = principle
  return (
    <div className={styles.card} style={{backgroundColor: `var(${color})`}}>
        <div className={styles.img}></div>
        <div className={styles.cardBody}>
            <h2>{ name.toUpperCase() }</h2>
        </div>
    </div>
  )
}
