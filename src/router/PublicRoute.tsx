import { Navigate } from "react-router-dom";
import { isLogin } from "../utils/isLogin";

interface PublicRouteProps {
  element: JSX.Element;
}
export const PublicRoute = ({ element: Element }: PublicRouteProps): JSX.Element => {
  return !isLogin() ? Element : <Navigate to="/" />;
};
