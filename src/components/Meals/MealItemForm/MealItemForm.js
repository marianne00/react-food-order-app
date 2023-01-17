import React from 'react'
import Input from '../../UI/Input/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {

  const submitHandler = e => {
    e.preventDefault();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }} />
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm