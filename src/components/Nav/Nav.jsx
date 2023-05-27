import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

function Nav() {
	return (
		<nav className={classes.nav}>
			<div>
				<Link to="/">
					<h2>Mine</h2>
				</Link>
			</div>
			<div>
				<Link to="/signin">
					<Button buttonType="nav">Login</Button>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
