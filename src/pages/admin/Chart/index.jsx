import React from "react";
import { Navigate } from "react-router";
export default function Chart() {
  const isAdmin = true;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return <div>Chart</div>;
}
