import React from 'react'
import styles from './Textbox.module.css';

export default function Textbox(props) {
  return (
    <>
     <input type="text" id={props.id} name={props.name} className={styles.btn+` ${props.className}`} style={props.style} onChange={props.onChange} onBlur={props.onBlur} value={props.value} placeholder={props.placeholder}  />
    </>
  )
}
