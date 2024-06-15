import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";

function PrivateRoute({ children }) {
  const { user } = useContext(GlobalContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;
