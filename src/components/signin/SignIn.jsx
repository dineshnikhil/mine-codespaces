import React from 'react';
import { useRef } from 'react';
import classes from './SignIn.module.css';

import finance_app from '../../images/Finance app.gif';
import FormInput from '../ui/FormInput';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import Button from '../ui/Button';

function SignIn() {
	const username = useRef();
	const password = useRef();

	const onSubmitHandler = (event) => {
		console.log(username.current.value, password.current.value);
	};

	return (
		<div className={classes.singin_div}>
			<div>
				<img src={finance_app} alt="finance app demo" />
			</div>
			<div className={classes.form_card}>
				<h1>
					<FontAwesomeIcon icon={faKey} className={classes.form_icon} />
					Login
				</h1>
				<p>login to your account - enjoy exclusive features and many more</p>
				<div className={classes.form_actual_div}>
					<form onSubmit={onSubmitHandler}>
						<FormInput placeholder="UserName" type="text" />
						<FormInput placeholder="Password" type="password" />
						<Button type="submit" buttonType="default">
							LOGIN
						</Button>
					</form>
					<hr />
					<Button buttonType="default">login with google</Button>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
