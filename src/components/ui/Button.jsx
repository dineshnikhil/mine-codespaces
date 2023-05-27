import React from 'react';
import './Button.module.css';

const BUTTON_TYPE_CLASS = {
	default: 'default_button',
	google: 'google',
	nav: 'nav_button',
};

function Button({ children, buttonType, ...otherProps }) {
	return (
		<button className={`${BUTTON_TYPE_CLASS[buttonType]}`} {...otherProps}>
			{children}
		</button>
	);
}

export default Button;
