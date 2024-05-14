import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAccount(fullName ,email, password);
      const loggedUser = await login(email, password);
      localStorage.setItem("token", loggedUser.token);
      navigate("/services", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <form className="login__form" action="#" onSubmit={handleFormSubmit}>
        <h1 className="login__title">Register</h1>
        <label className="login__form-label" htmlFor="fullName">
          Full name:
        </label>
        <input
          className="login__form-input"
          type="text"
          name="fullName"
          id="fullName"
          onChange={handleFullNameChange}
          value={fullName}
          placeholder="John Doe"
        />
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
        <label className="login__form-label" htmlFor="password">
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
        <label className="login__form-label" htmlFor="password">
          Confirm password:
        </label>
        <input
          className="login__form-input"
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="confirmMyPassword"
        />
        <button className="wh-button wh-button--primary" type="submit">
          Register
        </button>
        <p className="wh-text-center">
          Already have an account?{" "}
          <Link to="/login" className="wh-text-highlight">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
