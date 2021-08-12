import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Edit from "./components/Admin/Edit";
import Add from "./components/Admin/Add";
import Home from "./components/Home/Home";
import ShopContextProvider from "./context/ShopContext";
import UserContextProvider from "./context/UserContext";
import AuthContextProvider from "./components/Auth/AuthContextProvider";
import Login from "./components/Auth/Login";
import CardNav from "./components/Cart/CardNav";
import Detail from "./components/Detail/Detail";
import Favourit from "./components/Favourite/Favourit";

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
              <Route exact path="/cart" component={CardNav} />
              <Route exact path="/auth" component={Login} />
              <Route exact path="/detail" component={Detail} />
              <Route exact path="/fav" component={Favourit} />
            </Switch>
          </BrowserRouter>
        </ShopContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  );
};

export default Routes;
