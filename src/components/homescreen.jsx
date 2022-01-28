import React from "react";
import SignIn from "./signin";
import Login from "./login";
import { useState } from "react";

const Home = ({ handleLogin }) => {
	const [account, setAccount] = useState(false);

	return (
		<>
			{account ? (
				<>
					<Login handleLogin={handleLogin} />
					<p
						style={{ cursor: "pointer", color: "blue" }}
						onClick={() => setAccount(!account)}>
						Dont you have an account
					</p>
				</>
			) : (
				<>
					<SignIn handleLogin={handleLogin} />
					<p
						style={{ cursor: "pointer", color: "blue" }}
						onClick={() => setAccount(!account)}>
						Already have an account
					</p>
				</>
			)}
		</>
	);
};

export default Home;
