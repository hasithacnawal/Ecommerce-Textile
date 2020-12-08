import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Link, Route } from "react-router-dom";
import { signout } from "./actions/userActions";
import PrivateRoute from "./components/PrivateRoute";
import CartScreen from "./pages/CartScreen";
import HomeScreen from "./pages/HomeScreen";
import OrderHistory from "./pages/OrderHistory";
import OrderScreen from "./pages/OrderScreen";
import PaymentMethodScreen from "./pages/PaymentMethodScreen";
import PlaceOrderScreen from "./pages/PlaceOrderScreen";
import ProductScreen from "./pages/ProductScreen";
import ProfileScreen from "./pages/ProfileScreen";
import RegisterScreen from "./pages/RegisterScreen";
import ShippingDetailsScreen from "./pages/ShippingDetailsScreen";
import SigninScreen from "./pages/SigninScreen";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container ">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              amazona
            </Link>
          </div>
          <div>
            <Link to="/cart">
              Cart{" "}
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name}
                  <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">My Profile</Link>
                  </li>
                  <li>
                    <Link to="/user/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/signin" component={SigninScreen}></Route>
          <PrivateRoute
            exact
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <Route exact path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/register" component={RegisterScreen}></Route>
          <Route
            path="/shipping"
            component={ShippingDetailsScreen}
            exact
          ></Route>
          <Route path="/payment" component={PaymentMethodScreen} exact></Route>
          <Route path="/placeorder" component={PlaceOrderScreen} exact></Route>
          <Route path="/order/:id" component={OrderScreen} exact></Route>
          <Route
            path="/user/orderhistory"
            component={OrderHistory}
            exact
          ></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
