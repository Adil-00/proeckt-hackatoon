import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Edit from "./components/Admin/Edit";
import Add from "./components/Admin/Add";
import Home from "./components/Home/Home";
import ShopContextProvider from "./context/ShopContext";
import UserContextProvider from "./context/UserContext";
import CardNav from "./components/Cart/CardNav";

const Routes = () => {
  return (
    <UserContextProvider>
      <ShopContextProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/cart" component={CardNav} />
          </Switch>
        </BrowserRouter>
      </ShopContextProvider>
    </UserContextProvider>
  );
};

export default Routes;
