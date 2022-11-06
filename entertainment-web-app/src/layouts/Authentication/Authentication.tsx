import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "../../context/StateContext";
import "./Authentication.css";

export default function Authentication() {
  const { authenticationState } = useStateContext();

  const location: any = useLocation();

  if (authenticationState.isAuthenticated) {
    return <Navigate to="/" replace state={{ path: location.pathname }} />;
  }

  return (
    <main className="auth-wrapper">
      <Outlet />
    </main>
  );
}
