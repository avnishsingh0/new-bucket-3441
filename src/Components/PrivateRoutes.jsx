import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
  const isAuth = JSON.parse(localStorage.getItem("currentUser"));
  const location = useLocation();
  console.log(isAuth.isAuth);

  if (!isAuth.isAuth) {
    return <Navigate to={"/login"} state={location.pathname} replace />;
  }
  return children;
};
