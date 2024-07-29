import React from "react";
import NavBar from "./NavBar";
import styles from "./AppContainer.module.css";
import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import Productstore from "./Productstore";
import ProductDetail from "./ProductDetail";
import ProductSearchResults from "./ProductSearchResults";
import Cart from "./Cart";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import AdminSignIn from "./AdminSignIn";
import AdminOrders from "./AdminOrders";

function AppContainer() {
  return (
    <div className={styles.outerContainer}>
      <HashRouter>
        <NavBar />
        <Switch>
          <Route exact path="/productstore/product_search/:searchTitle">
            <ProductSearchResults />
          </Route>

          <Route path="/productstore/product/:id">
            <ProductDetail />
          </Route>

          <Route path="/">
            <Productstore />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>

          <Route path="/user/signin">
            <SignIn />
          </Route>

          <Route path="/user/signup">
            <SignUp />
          </Route>

          <Route path="/admin/signin">
            <AdminSignIn />
          </Route>

          <Route path="/admin/orders">
            <AdminOrders />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default AppContainer;