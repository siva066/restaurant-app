import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('adminAuthenticated') === 'true';
  const loginTime = localStorage.getItem('adminLoginTime');
  
  // Check if login is still valid (24 hours)
  const isLoginValid = () => {
    if (!loginTime) return false;
    const loginDate = new Date(loginTime);
    const now = new Date();
    const hoursDiff = (now.getTime() - loginDate.getTime()) / (1000 * 60 * 60);
    return hoursDiff < 24;
  };

  if (!isAuthenticated || !isLoginValid()) {
    // Clear invalid session
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
    return <Navigate to="/admin-login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
