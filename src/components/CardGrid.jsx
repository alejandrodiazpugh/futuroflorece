import React from 'react'
import gridStyles from "./CardGrid.module.css"

export default function CardGrid() {
  return (
    <div className={gridStyles.grid}>
      <article className={gridStyles.card1}>
        <div className={gridStyles.cardImg}></div>
        <div className={gridStyles.cardBody}>
          <h3 className={gridStyles.cardTitle}>Lorem</h3>
        </div>
      </article>
      <article className={gridStyles.card2}>
        <div className={gridStyles.cardImg}></div>
        <div className={gridStyles.cardBody}>
          <h3 className={gridStyles.cardTitle}>Lorem</h3>
          <p className={gridStyles.cardText}>consectetur adipiscing elit. Pellentesque a malesuada ex, quis tincidunt metus. Vivamus ut nibh finibus, hendrerit.</p>
        </div>
      </article>
      <article className={gridStyles.card3}>
        <div className={gridStyles.cardImg}></div>
        <div className={gridStyles.cardBody}>
          <h3 className={gridStyles.cardTitle}>Lorem</h3>
          <p className={gridStyles.cardText}>consectetur adipiscing elit. Pellentesque a malesuada ex, quis tincidunt metus. Vivamus ut nibh finibus, hendrerit.</p>
        </div>
      </article>
      <article className={gridStyles.card4}>
        <div className={gridStyles.cardImg}></div>
        <div className={gridStyles.cardBody}>
          <h3 className={gridStyles.cardTitle}>Lorem</h3>
          <p className={gridStyles.cardText}>consectetur adipiscing elit. Pellentesque a malesuada ex, quis tincidunt metus. Vivamus ut nibh finibus, hendrerit.</p>
        </div>
      </article>
    </div>
  )
}
