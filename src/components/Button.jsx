import React from 'react'
import buttonStyles from './Button.module.css'

export default function Button({text, btnType}) {
  return (
    <button type={btnType} className={buttonStyles.btnMain}>{ text }</button>
  )
}
