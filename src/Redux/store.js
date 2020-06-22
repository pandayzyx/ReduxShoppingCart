import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer, composeEnhancer(applyMiddleware()));
console.log(store.getState());

export default store;
