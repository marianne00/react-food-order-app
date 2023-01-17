import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        // all key value pairs will be added as attributes
        {...props.input} />
    </div>
  )
}

export default Input