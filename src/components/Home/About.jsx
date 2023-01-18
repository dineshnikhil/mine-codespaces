import React from 'react';
import classes from './About.module.css';
import finance_app from '../../images/Finance app.gif';
import Button from '../ui/Button';

function About() {
	return (
		<div className={classes.about_div}>
			<div>
				<img src={finance_app} alt="finance app demo" />
			</div>
			<div>
				<h3>Keep every expense crystal clear</h3>
				<p>
					Get a full view so you know where to save. Track spending, detect
					fraud, and keep tabs on rising subscription costs.
				</p>
				<Button content="sign up" />
			</div>
		</div>
	);
}

export default About;
