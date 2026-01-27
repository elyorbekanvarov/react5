import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  let token = JSON.parse(localStorage.getItem("token"));

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
