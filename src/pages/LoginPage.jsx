import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MovieContext } from '../func/context';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setLogin } = useContext(MovieContext);

  const handleLoginClick = () => {
    setLogin(true);
    navigate('/');
  };
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
          <span onClick={handleLoginClick}>LOGIN</span>
          <p className="order">
            I already have an account ! <Link to="/register">Sign up.</Link>
          </p>
        </section>
      </form>
    </main>
  );
};

export default LoginPage;
