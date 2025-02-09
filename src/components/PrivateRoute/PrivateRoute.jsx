import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // Ensures `children` is a valid React node
};


export default PrivateRoute;
