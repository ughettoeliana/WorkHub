import PropTypes from "prop-types";
import { useState } from "react";
import './EditUserForm.css'

export default function EditUserForm({
  user,
  handleUpdateUser,
  toggleEditMode,
}) {
  const [formState, setFormState] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    rol: user.rol || '',
    address: user.address || '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleUpdateUser({ ...user, ...formState });
  }

  return (
    <form className="login__form" action="#" onSubmit={handleSubmit}>
      <h1 className="login__title">Edit your information</h1>
      <label className="login__form-label" htmlFor="firstName">
        First Name:
      </label>
      <input
        className="login__form-input"
        type="text"
        name="firstName"
        id="firstName"
        onChange={handleChange}
        value={formState.firstName}
        required
      />
      <label className="login__form-label" htmlFor="lastName">
        Last Name:
      </label>
      <input
        className="login__form-input"
        type="text"
        name="lastName"
        id="lastName"
        onChange={handleChange}
        value={formState.lastName}
        required
      />
      <label className="login__form-label" htmlFor="email">
        Email:
      </label>
      <input
        className="login__form-input"
        type="email"
        name="email"
        id="email"
        onChange={handleChange}
        value={formState.email}
        required
      />
      <label className="login__form-label" htmlFor="lastName">
        Address:
      </label>
      <input
        className="login__form-input"
        type="text"
        name="address"
        id="address"
        onChange={handleChange}
        value={formState.address}
        required
      />

      <label className="login__form-label" htmlFor="lastName">
        Rol (job):
      </label>
      <input
        className="login__form-input"
        type="text"
        name="rol"
        id="rol"
        onChange={handleChange}
        value={formState.rol}
        required
      />
      <div className="buttons-container">
        <button
          className="wh-button wh-color-gray-1 wh-bg-gray-4"
          type="button"
          onClick={toggleEditMode}
        >
          Close
        </button>
        <button className="wh-button wh-button--primary" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

EditUserForm.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    rol: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  handleUpdateUser: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
};
