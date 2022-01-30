import React from "react";

import Home from "./homescreen";

import { connect } from "react-redux";

const Form = ({ islogged }) => {
	return (
		<div className='form-conrainer'>
			{islogged ? <h1>Hi you are logged in!</h1> : <Home />}
		</div>
	);
};

const mapStateToProps = state => ({
	islogged: state.login.isLogged,
});

export default connect(mapStateToProps, null)(Form);
