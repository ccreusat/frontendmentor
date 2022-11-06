import { Navigate, useLocation } from "react-router-dom";
import { useStateContext } from "../context/StateContext";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const { authenticationState } = useStateContext();
  const location = useLocation();

  if (!authenticationState.isAuthenticated) {
    return <Navigate to="/login" state={{ path: location.pathname }} replace />;
  }

  return children;
}
