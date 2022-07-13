import React from 'react'
import styles from "./Support.module.css"

export default function Support() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>¿QUIERES APOYAR A EL FUTURO FLORECE?</h2>
        <section className={styles.pageHeading}>
            <h3 className={styles.subtitle}>BUSCAMOS GENTE COMPROMETIDA CON SU COMUNIDAD</h3>
            <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni sit, maxime, temporibus ad dolore distinctio culpa cupiditate asperiores voluptatum tempora voluptate, animi corporis eaque ex laudantium quasi nobis accusamus rem eum dicta quae natus doloribus possimus consequatur! Esse, hic omnis molestias aspernatur qui saepe debitis minima nulla possimus nobis dignissimos mollitia nemo eveniet tempore officiis. Perspiciatis, quae eligendi ipsa suscipit eveniet sint atque doloremque eius ut, voluptatibus, vel placeat velit dolorem rerum pariatur mollitia cum numquam! Non odio quia optio. Dolore rem eveniet deleniti iusto? Asperiores molestiae possimus perspiciatis, deleniti itaque ratione, ducimus est delectus sint unde fugiat tempore eveniet!</p>
        </section>
        <section className={styles.cards}>
            <article className={styles.card}>
                <h3 className={styles.cardTitle}>BUSCAMOS VOLUNTARIXS</h3>
                <div className={styles.img}></div>
            </article>
            <article className={styles.card}>
                <h3 className={styles.cardTitle}>BUSCAMOS MILITANCIAS</h3>
                <div className={styles.img}></div>
            </article>
            <article className={styles.card}>
                <h3 className={styles.cardTitle}>BUSCAMOS DONANTES</h3>
                <div className={styles.img}></div>
            </article>
        </section>
    </div>
  )
}
