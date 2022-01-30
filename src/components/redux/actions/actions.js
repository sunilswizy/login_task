import { HANDLE_LOGIN, SET_ACCOUNT } from "./types";

export const handleLogin = () => dispatch =>
	dispatch({
		type: HANDLE_LOGIN,
		payload: true,
	});

export const setAccount = () => dispatch =>
	dispatch({
		type: SET_ACCOUNT,
	});
