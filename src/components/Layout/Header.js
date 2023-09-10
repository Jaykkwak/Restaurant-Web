import React, { Fragment } from 'react'

import classes from './Header.module.css'
import MealImg from '../Img/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
        <head className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onClick}/>
        </head>
        <div className={classes['main-image']}>
            <img src={MealImg} alt='Meal Image'/> 
        </div>
    </Fragment>
  )
}

export default Header