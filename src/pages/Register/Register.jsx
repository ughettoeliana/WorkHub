import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/auth";
import Message from "../../components/Message/Message";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState();

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

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  function validatePassword() {
    if (password === confirmPassword) {
      return password;
    } else {
      setMessage({
        message: "Las contraseñas no coinciden",
        type: "error",
      });
      return null;
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const validPassword = validatePassword();
    if (!validPassword) {
      return;
    }

    await register({ fullName, email, validPassword });
    navigate("/", { replace: true });
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
          required
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
          required
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
          required
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
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
          required
          placeholder="confirmMyPassword"
        />
        {message && <Message message={message} />}
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
