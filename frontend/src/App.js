import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import CartScreen from "./pages/CartScreen";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container ">
        <header className="row">
          <div>
            <a className="brand" href="/">
              amazona
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/product/:id" component={ProductScreen}></Route>
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
