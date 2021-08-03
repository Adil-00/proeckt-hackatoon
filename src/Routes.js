import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Edit from "./components/Admin/Edit";
import Add from "./components/Admin/Add";
import Home from "./components/Home/Home";
import ShopContextProvider from "./context/ShopContext";

const Routes = () => {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <Switch>
          <Route exact path="/add" component={Add} />
          <Route exact path="/edit" component={Edit} />
          <Route exact path="/" component={Home} />
        </Switch>
      </ShopContextProvider>
    </BrowserRouter>
  );
};

export default Routes;
