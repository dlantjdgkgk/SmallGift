import { Navigate } from "react-router-dom";
import { isLogin } from "utils/isLogin";

interface PrivateRouteProps {
  element: JSX.Element;
}

export const PrivateRoute = ({ element: Element }: PrivateRouteProps): JSX.Element => {
  return isLogin() ? Element : <Navigate to="/login" />;
};
