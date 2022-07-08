//@ts-check
import React from 'react'
import buttonStyles from './Button.module.css'

export default function Button({ text, btnType, variant }) {
  const variantTypes = ["btnMain", "btnLarge", "btnRounded"];

  const renderSwitch = (param) => {
    switch(param) {
      case "btnMain" :
        return `${buttonStyles.btnMain}`;
      case "btnLarge" :
        return `${buttonStyles.btnLarge}`;
      case "btnRounded" :
        return `${buttonStyles.btnRounded}`;
      default :
        return `${buttonStyles.btnMain}`;
    }
  }

  return (
     <button type={btnType} className={renderSwitch(variant)}>{ text }</button>
 

  )
}
