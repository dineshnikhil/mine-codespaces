import React from 'react'
import classes from './Intro.module.css'
import manage_money from '../../images/Manage money.gif'
import Button from '../ui/Button'

function Intro() {
  return (
    <div className={classes.intro_div}>
        <div>
            <h2>Managing money, made simple</h2>
            <Button content="sign up" />
        </div>
        <div>
            <img src={manage_money} alt="" />
        </div>
    </div>
  )
}

export default Intro