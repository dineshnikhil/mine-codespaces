import React from 'react';
import classes from './Info.module.css';

function Info() {
	return (
		<div className={classes.info_div}>
			<h1>Your finances, safe and secure</h1>
			<h3>
				With 256-bit encryption and multi-factor authentication, we protect your
				info as if it’s our own.
			</h3>
		</div>
	);
}

export default Info;
