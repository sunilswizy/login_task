import { HANDLE_LOGIN, SET_ACCOUNT } from "../actions/types";

const initialState = {
	isLogged: false,
	account: false,
};

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case HANDLE_LOGIN:
			return {
				...state,
				isLogged: action.payload,
			};

		case SET_ACCOUNT:
			return {
				...state,
				account: !state.account,
			};

		default:
			return state;
	}
};

export default loginReducer;
