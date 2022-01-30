import React from "react";
import SignIn from "./signin";
import Login from "./login";

import { connect } from "react-redux";
import { setAccount } from "./redux/actions/actions";

const Home = ({ account, setAccount }) => {
	return (
		<>
			{account ? (
				<>
					<Login />
					<p style={{ cursor: "pointer", color: "blue" }} onClick={setAccount}>
						Dont you have an account
					</p>
				</>
			) : (
				<>
					<SignIn />
					<p style={{ cursor: "pointer", color: "blue" }} onClick={setAccount}>
						Already have an account
					</p>
				</>
			)}
		</>
	);
};

const mapStateToProps = state => ({
	account: state.login.account,
});

export default connect(mapStateToProps, { setAccount })(Home);
