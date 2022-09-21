import React from "react";
import { Navigate } from "react-router-dom";

function ConditionalRedirect({ isSet, children }) {
  if (!isSet) {
    return <Navigate to="/wizard" replace />;
  }
  return children;
}

export default ConditionalRedirect;
