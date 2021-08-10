import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import { authContext } from "./AuthContextProvider";
import Login from "./Login";

const Auth = () => {
  const { user } = useContext(authContext);
  return (
    <div className="Auth">
      {user ? (
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Auth;
