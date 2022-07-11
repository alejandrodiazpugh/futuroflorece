import React from 'react'
import gridStyles from "./CardGrid.module.css"
import image1 from "../images/galeria1.jpg"
import image2 from "../images/galeria2.jpg"
import image3 from "../images/galeria3.jpg"
import image4 from "../images/galeria4.jpg"
import image5 from "../images/galeria5.jpg"
import image6 from "../images/galeria6.jpg"
import image7 from "../images/galeria7.jpg"
import image8 from "../images/galeria8.jpg"
import image9 from "../images/galeria9.jpg"

export default function CardGrid() {
  return (
    <div className={gridStyles.grid}>
      
      <article className={gridStyles.card}>
        <img src={image2} alt="" className={gridStyles.img} />
      </article>
      <article className={gridStyles.card}>
        <img src={image3} alt="" className={gridStyles.img} />
      </article>
      
      <article className={gridStyles.card}>
        <img src={image1} alt="" className={gridStyles.img} />
      </article>
      <article className={gridStyles.card}>
        <img src={image6} alt="" className={gridStyles.img} />
      </article>
      <article className={gridStyles.card}>
        <img src={image7} alt="" className={gridStyles.img} />
      </article>
      <article className={gridStyles.card}>
        <img src={image8} alt="" className={gridStyles.img} />
      </article>
      <article className={`${gridStyles.card} ${gridStyles.cardLarge}`}>
        <img src={image9} alt="" className={gridStyles.img} />
      </article>
      <article className={`${gridStyles.card}`}>
        <img src={image5} alt="" className={gridStyles.img} />
      </article>
      <article className={gridStyles.card}>
        <img src={image4} alt="" className={gridStyles.img} />
      </article>
    </div>
  )
}
