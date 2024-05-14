import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <form className="login__form">
        <h1 className="login__title"> Login</h1>
        <label className="login__form-label" htmlFor="email">
          Email:
        </label>
        <input
          className="login__form-input"
          type="email"
          name="email"
          id="email"
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
