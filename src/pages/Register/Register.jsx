import "./Register.css";

export default function Register() {
  return (
    <div className="login">
      <form className="login__form">
        <h1 className="login__title">Register</h1>
        <label className="login__form-label" htmlFor="fullName">
          Full name:
        </label>
        <input
          className="login__form-input"
          type="text"
          name="fullName"
          id="name"
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
          Already have an account? <a className="wh-text-highlight">Login</a>
        </p>
      </form>
    </div>
  );
}
