import { useState } from "react";

export function useAuth() {
  // Fake authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Simple login/logout toggle
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}
