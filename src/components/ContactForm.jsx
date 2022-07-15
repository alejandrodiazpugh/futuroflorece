import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Button from "./Button"
import styles from "./ContactForm.module.css"
import * as Yup from 'yup'
import { doc, getDoc } from 'firebase/firestore'

export default function ContactForm() {

  return (
    <div className={styles.container}>
        <h2 className={styles.title}>COMPÁRTENOS TUS DATOS PARA PONERNOS EN CONTACTO</h2>
        <div className={styles.flexMainContainer}>
        <Formik
       initialValues={{ 
        firstName: '', 
        lastName: '',
        email: '' }}
        validationSchema={Yup.object({
            firstName: Yup.string()
            .required('Campo Obligatorio'),
            lastName: Yup.string()
            .required('Campo Obligatorio')
        })}

       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form style={{display: "grid", gap: "1rem", marginBlock: "2rem"}}>
            <div className={styles.firstName}>
                <label className={styles.labels} htmlFor='firstName'>Nombre:</label>
                <Field type="firstName" name="firstName" className="contactField" />
                <div style={{width: "100%", height: "1rem"}}>
                    <ErrorMessage name="firstName" component="p" className='contactError' />
                </div>
            </div>
            <div className={styles.lastName}>
                <label className={styles.labels} htmlFor='lastName'>Apellidos:</label>
                <Field type="lastName" name="lastName" className="contactField" />
                <div style={{width: "100%", height: "1rem"}}>
                    <ErrorMessage name="lastName" component="p" className='contactError' />
                </div>
            </div>
            <div className={styles.email}>
                <label className={styles.labels} htmlFor='email'>Correo Electrónico:</label>
                <Field type="email" name="email" className="contactField" />
                <div style={{width: "100%", height: "1rem"}}>
                    <ErrorMessage name="email" component="p" className='contactError' />
                </div>
            </div>
           <div className={styles.checkboxes}>
                <label className={styles.checkboxLabels} htmlFor="volunteer">Quiero apoyar como voluntarix:
                    <Field type='checkbox' name="volunteer" className="contactCheckbox" />
                </label>
                <label className={styles.checkboxLabels} htmlFor="affiliate">Quiero afiliarme a El Futuro Florece:
                    <Field type='checkbox' name="affiliate" className="contactCheckbox" />
                </label>
                <label className={styles.checkboxLabels} htmlFor="donatary">Quisiera hacer una donación:
                    <Field type='checkbox' name="donatary" className="contactCheckbox" />
                </label>
                <label className={styles.checkboxLabels} htmlFor="rant">Solo quiero rantear:
                    <Field type='checkbox' name="rant" className="contactCheckbox" />
                </label>            
           </div>
           <div className={styles.messageBox}>
                <label htmlFor="message" className={styles.messageLabel}>Déjanos aquí tu mensaje:</label>
                <Field as='textarea' name="message" className="contactTextArea"  />
           </div>
          <Button text={"Enviar"} btnType="button" variant={"btnMain"} />
         </Form>
       )}
     </Formik>
     <div className={styles.contactImg}></div>
        </div>
       
    </div>
  )
}
