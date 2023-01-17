import { Fragment } from 'react'
import classes from './Header.module.css'
import bannerImg from '../../../assets/meals.jpeg'
import Button from '../Button/Button'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Just another restaurant</h1>
        <Button onClick={props.onCartToggle} />
      </header>
      <div className={classes['main-image']}>
        <img src={bannerImg} alt="food-order-img" />
      </div>
    </Fragment>
  )
}

export default Header