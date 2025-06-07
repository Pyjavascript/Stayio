import React from "react";
import { useAuth } from "../hook/authHook";
import Dashboard from "./Dashboard";

function Home({ message }) {
  const { user } = useAuth();

  if (!user) {
    // Public visitor (not logged in)
    return (
      <Dashboard />
    );
  }

  if (!user.emailVerified) {
    // Logged in but email not verified
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-medium mb-2">Hi {user.email}</h2>
        <p className="mb-4">Please verify your email to access Stayio features.</p>
        <a href="/signup" className="text-blue-600 underline">Go back to Sign Up</a>
      </div>
    );
  }

  // Fully logged in + verified
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome back, {user.email}</h1>
      <p className="text-gray-600 mt-2">Your dashboard is under construction 🚧</p>
    </div>
  );
}

export default Home;
