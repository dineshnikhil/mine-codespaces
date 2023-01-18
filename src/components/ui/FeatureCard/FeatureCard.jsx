import React from 'react';
import classes from './FeatureCard.module.css'

function FeatureCard(props) {
	return (
		<div className={classes.feature_card}>
			<img className={classes.feature_img} src={props.obj.img_url} alt="manage money." />
			<h3>{props.obj.title}</h3>
			<p>
				{props.obj.description}
			</p>
		</div>
	);
}

export default FeatureCard;
