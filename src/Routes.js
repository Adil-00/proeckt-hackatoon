import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Edit from "./components/Admin/Edit";
import Add from "./components/Admin/Add";
import Home from "./components/Home/Home";
import ShopContextProvider from "./context/ShopContext";
import UserContextProvider from "./context/UserContext";
import Cart from "./components/Cart/Cart";
import AuthContextProvider from "./components/Auth/AuthContextProvider";
import Login from "./components/Auth/Login";

const Routes = () => {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <ShopContextProvider>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={Add} />
              <Route exact path="/edit" component={Edit} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/auth" component={Login} />
            </Switch>
          </BrowserRouter>
        </ShopContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
};

export default Routes;
