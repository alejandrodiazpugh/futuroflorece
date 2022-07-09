import React from 'react'
import newsletterStyles from './Newsletter.module.css'
import { Formik, Field, Form } from 'formik'
import Button from './Button'

export default function Newsletter() {
  return (
    <div className={newsletterStyles.container}>
        <h2 className={newsletterStyles.title}>SUSCRÍBETE A NUESTRO BOLETÍN PARA RECIBIR NOTICIAS DE NUESTRAS ACTIVIDADES</h2>      
        <Formik
      initialValues={{
        Correo: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
      <label className={newsletterStyles.formLabel} htmlFor="email">Déjanos aquí tu correo:</label>
        <div className={newsletterStyles.fieldAndBtn}>
        <Field 
          id="email"
          className={newsletterStyles.field}
          name="email"
          placeholder="elfuturo@florece.mx"
          type="email"
        />
        <Button text={'Enviar'} btnType={'button'} variant={'btnMain'}/>
        </div>
      </Form>
    </Formik>
    </div>
  )
}
