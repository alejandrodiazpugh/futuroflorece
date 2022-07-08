import React from 'react'
import PrincipioCard from './PrincipioCard'
import styles from "./Principios.module.css"

export default function Principios() {
    const principles = [
        {id: 1, name: "apertura", color: "--clrTerciariaGuindo"},
        {id: 2, name: "mujeres al frente", color: "--clrTerciariaSalmon"},
        {id: 3, name: "ecología", color: "--clrTerciariaVerde"},
        {id: 4, name: "justicia social", color: "--clrTerciariaGrisAzul"},
        {id: 5, name: "democracia real y participativa", color: "--clrSecundariaRosa"},
        {id: 6, name: "inteligencia colectiva", color: "--clrSecundariaAzulFuerte"},
        {id: 7, name: "futuros compartidos", color: "--clrSecundariaMorado"},
    ]

  return (
    <div className={styles.contanier}>
        <h2 className={styles.title}>NUESTROS PRINCIPIOS</h2>
        <div className={styles.cardContainer}>
            {principles.map(principle => <PrincipioCard key={principle.id} principle = { principle } />)}
        </div>
       
    </div>
  )
}
