import React, { useState } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { handleLogin } from "./redux/actions/actions";

const SignIn = ({ handleLogin }) => {
	const [credentials, setCredentials] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const { firstName, lastName, email, password } = credentials;

	const handleChange = e => {
		const { name, value } = e.target;

		setCredentials({
			...credentials,
			[name]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		let fnameValid = firstName.length > 0;
		if (!fnameValid) {
			alert("First Name Cannot be empty");
			return;
		}

		let lnameValid = lastName.length > 0;
		if (!lnameValid) {
			alert("Last Name Cannot be empty");
			return;
		}

		let emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		if (!emailValid) {
			alert("Invalid Email");
			return;
		}

		let passwordValid = password.length >= 8;
		if (!passwordValid) {
			alert("Password length must be 8 or more!");
			return;
		}

		axios
			.post("http://3.140.210.76:8000/api/user/", {
				first_name: firstName,
				last_name: lastName,
				email: email,
				password: password,
			})
			.then(response => {
				handleLogin();
			})
			.catch(err => console.log(err));
	};
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor='fname'>FirstName</label>
				<input
					type='text'
					name='firstName'
					value={firstName}
					id='fname'
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor='lname'>Lastname</label>
				<input
					type='text'
					name='lastName'
					value={lastName}
					id='lname'
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					name='email'
					value={email}
					id='email'
					onChange={handleChange}
				/>
			</div>
			<div>
				<label htmlFor='password'>password</label>
				<input
					type='password'
					name='password'
					value={password}
					id='password'
					onChange={handleChange}
				/>
			</div>
			<input type='submit' value='submit' className='btn' />
		</form>
	);
};

export default connect(null, { handleLogin })(SignIn);
