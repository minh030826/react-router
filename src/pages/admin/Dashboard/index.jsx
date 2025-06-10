import React from "react";
import { Navigate } from "react-router";

export default function Dashboard() {
  const isAdmin = true;

  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return <div>Dashboard</div>;
}
