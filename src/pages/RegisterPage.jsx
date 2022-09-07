import React from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <main className="formContainer">
      <form className="form">
        <h1 className="form__logo">
          Register<span>Account</span>
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
          <li className="inputWrapper">
            <label htmlFor="passwordPre">Password Preview</label>
            <input type="password" id="passwordPre" />
          </li>
        </ul>
        <section className="submit">
          <span>SUBMIT</span>
          <p className="order">
            I already have an account ! <Link to="/login">Log in.</Link>
          </p>
        </section>
      </form>
    </main>
  );
};

export default RegisterPage;
