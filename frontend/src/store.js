import { applyMiddleware, combineReducers, compose, createStore } from "redux";
//import data from "./data";
import thunk from "redux-thunk";
import {
  productDetailsReducer,
  productListReducer,
} from "./reducers/productReducer";

const intialState = {};

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

//static product request

// const reducer = (state, acton) => {
//   return { products: data.products };
// };

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  intialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
