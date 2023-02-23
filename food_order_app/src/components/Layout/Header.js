import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import MealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onCartShow}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealsImage} alt='A table full of delicious food!'/>
        </div>
    </React.Fragment>
  )
}

export default Header