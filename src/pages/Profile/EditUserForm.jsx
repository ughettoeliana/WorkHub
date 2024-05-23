import PropTypes from "prop-types";

export default function EditUserForm({
  user,
  handleUpdateUser,
}) {

 

  return (
    <form className="login__form" action="#" onSubmit={handleUpdateUser}>
      <h1 className="login__title">Edit your information</h1>
      <label className="login__form-label" htmlFor="firstName">
        First Name:
      </label>
      <input
        className="login__form-input"
        type="text"
        name="firstName"
        id="firstName"
        onChange={''}
        value={''}
        required
        placeholder={user.firstName}
      />
      <div className="">
        <button
          className="wh-button wh-button--primary"
          type="submit"
        >
          Cerrar
        </button>
        <button className="wh-button wh-button--primary" type="submit">
          Guardar
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
  }).isRequired,
  handleUpdateUser: PropTypes.func.isRequired,
};