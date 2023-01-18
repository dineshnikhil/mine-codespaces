import React from 'react';
import About from './About';
import Features from './Features';
import classes from './Home.module.css'
import Info from './Info';
import Intro from './Intro';

function Home() {
	return (
		<div className={classes.home_div}>
			<Intro />
			<About />
			<Features />
			<Info />
		</div>
	);
}

export default Home;
