import "./Register.css";

export default function Register() {
  return (
    <div className="container">
      <div className="container__content">
        <div>
          <h1> Login</h1>
        </div>
        <div className="inputs__container">
            <label htmlFor="email" className="label">Email</label>
            <input type="email" name="email" id="email" className="input" placeholder="Email"/>
            <label htmlFor="password" className="label">Password</label>
            <input type="password" name="password" id="password" className="input"placeholder="Password"/>
            <button type="submit" className="base-button submit__button">Login</button>
            <p>Don`t have an account? <a className="link">Register</a></p>
        </div>
      </div>
    </div>
  );
}
