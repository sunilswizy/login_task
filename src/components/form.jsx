import React, { useState } from "react";

import Home from "./homescreen";

const Form = () => {
	const [islogged, setLogged] = useState(false);

	const handleLogin = () => {
		setLogged(true);
	};

	return (
		<div className='form-conrainer'>
			{islogged ? (
				<h1>Hi you are logged in!</h1>
			) : (
				<Home handleLogin={handleLogin} />
			)}
		</div>
	);
};

export default Form;
