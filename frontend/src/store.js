import { applyMiddleware, compose, createStore } from "redux";
import data from "./data";
import thunk from "redux-thunk";

const intialState = {};
const reducer = (state, acton) => {
  return { products: data.products };
};

const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducer,
  intialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
