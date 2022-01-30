import { combineReducers } from "redux";
import loginReducer from "./loginReducers";

export const rootReducer = combineReducers({
	login: loginReducer,
});
