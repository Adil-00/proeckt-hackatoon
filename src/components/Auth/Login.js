import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import { authContext } from "./AuthContextProvider";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    emailError,
    handleSignUp,
    passwordError,
    handleLogin,
    hasAccount,
    setHasAccount,
    user,
  } = useContext(authContext);

  return (
    <section className="login">
      <div className="loginContainer">
        <label>Имя пользователя</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Пароль</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleLogin}
              >
                Войти
              </Button>

              <p>
                Нет учетной записи?
                <Button onClick={() => setHasAccount(!hasAccount)}>
                  Зарегистрироваться
                </Button>
              </p>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleSignUp}
              >
                Регистрация
              </Button>

              <p>
                Уже есть аккаунт?
                <Button onClick={() => setHasAccount(!hasAccount)}>
                  Войти
                </Button>
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
