import React from 'react'
import gridStyles from "./CardGrid.module.css"

export default function CardGrid() {
  return (
    <div className={gridStyles.grid}>
      <article className={gridStyles.card}>
        <div className={gridStyles.cardImg}></div>
        <div className={gridStyles.cardBody}></div>
      </article>
    </div>
  )
}
