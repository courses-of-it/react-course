import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router";

export const PrivateRoute = ({
  isAuthenticated,
  component: Componet,
  ...rest
}) => {
  console.log(rest.location);
  localStorage.setItem(
    "lastPath",
    rest.location.pathname + rest.location.search
  );
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Componet {...props} /> : <Redirect to="login" />
      }
    />
  );
};

PrivateRoute.prototypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};
