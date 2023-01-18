import React from 'react'
import classes from './Button.module.css'

function Button(props) {
  return (
    <button className={classes.custom_btn}>{props.content}</button>
  )
}

export default Button