import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  // Fake authentication (replace with real logic later)
  const isAuthenticated = false; // change to true to allow access

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
