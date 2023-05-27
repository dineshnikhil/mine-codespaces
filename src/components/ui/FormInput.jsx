import React from 'react';
import classes from './FormInput.module.css';

function FormInput({ placeholder, ...otherProps }) {
	return (
		<input
			className={classes.input}
			placeholder={placeholder}
			{...otherProps}
		/>
	);
}

export default FormInput;
