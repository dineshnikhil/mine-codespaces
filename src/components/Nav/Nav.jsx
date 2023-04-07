import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

function Nav() {
	return (
		<nav className={classes.nav}>
			<div>
				<h2>Mine</h2>
			</div>
			<div>
				<Link to="/signin">
					<Button content="SIGN IN" />
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
