import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <main className="formContainer">
      <form className="form">
        <h1 className="form__logo">
          Login<span>Page</span>
        </h1>
        <ul className="inputGroup">
          <li className="inputWrapper">
            <label htmlFor="account">Account</label>
            <input type="text" id="account" />
          </li>
          <li className="inputWrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </li>
        </ul>
        <section className="submit">
          <span>LOGIN</span>
          <p className="order">
            I already have an account ! <Link to="/register">Sign up.</Link>
          </p>
        </section>
      </form>
    </main>
  );
};

export default LoginPage;
