import { createStore } from "redux";
import rootReducer from "./rootreducers";

const initializeState = {};

const store = createStore(rootReducer, initializeState);

export default store;
