import React, { useState } from "react";
import axios from "axios";

const Login = ({ handleLogin }) => {
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	const { email, password } = credentials;

	const handleChange = e => {
		const { name, value } = e.target;

		setCredentials({
			...credentials,
			[name]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

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
			.post("http://3.140.210.76:8000/api/token/", {
				email: email,
				password: password,
			})
			.then(response => {
				console.log(response.data);
				handleLogin();
			})
			.catch(err => alert("Invalid Account!"));
	};

	return (
		<div className='form-conrainer'>
			<form onSubmit={handleSubmit}>
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
		</div>
	);
};

export default Login;
