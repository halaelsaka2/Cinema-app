import { Route, Redirect } from "react-router-dom";
const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: process.env.PUBLIC_URL + "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;
