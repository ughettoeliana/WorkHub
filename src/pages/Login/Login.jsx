import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import saveIdTokenToLocalStorage, { login } from "../../services/auth";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
    await login({email, password});
    await saveIdTokenToLocalStorage()
    navigate('/', {replace: true})
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <form className="login__form" action="#" onSubmit={handleFormSubmit}>
        <h1 className="login__title"> Login</h1>
        <label className="login__form-label" htmlFor="email">
          Email:
        </label>
        <input
          className="login__form-input"
          type="email"
          name="email"
          id="email"
          onChange={handleEmailChange}
          value={email}
          placeholder="john.doe@example.com"
        />
        <label className="login__form-label" htmlFor="password" >
          Password:
        </label>
        <input
          className="login__form-input"
          type="password"
          name="password"
          id="password"
          onChange={handlePasswordChange}
          value={password}
          placeholder="myPassword"
        />
        <button className="wh-button wh-button--primary" type="submit">
          Login
        </button>
        <p className="wh-text-center">
          Don`t have an account? <Link to='/register' className="wh-text-highlight">Register</Link>
        </p>
      </form>
    </div>
  );
}
