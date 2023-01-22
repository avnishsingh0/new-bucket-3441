import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivteRoutes = ({ children }) => {
    const isAuth = useSelector((store) => store.authReducer.isAuth);
    const location = useLocation();
  
    if (!isAuth) {
      return <Navigate to={"/login"} state={location.pathname} replace />;
    }
    return children; 
  };
