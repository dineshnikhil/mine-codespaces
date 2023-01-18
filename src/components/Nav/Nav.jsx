import React from 'react'
import Button from '../ui/Button'
import classes from './Nav.module.css'

function Nav() {
  return (
    <nav className={classes.nav}>
        <div>
            <h2>Mine</h2>
        </div>
        <div>
            <Button content="sign up" />
            <Button content="login" />
        </div>
    </nav>
  )
}

export default Nav