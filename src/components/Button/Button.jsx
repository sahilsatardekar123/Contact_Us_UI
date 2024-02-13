import React from 'react'
import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css"

function Button( {isOutline, icon, text}) {
  return (
    <button className={isOutline ? styles.outline_Btn : styles.primary_Btn} >
      {icon}
      {text}
    </button>
  )
}

export default Button
