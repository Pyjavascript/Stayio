import { Login, Signup, Home } from "./index";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import { useAuth } from "./hook/authHook";
import "./App.css";

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              user.emailVerified ? (
                <Home />
              ) : (
                <Navigate to="/signup" />
              )
            ) : (
              <Signup />
            )
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/home"
          element={
            user && user.emailVerified ? <Home /> : <Navigate to="/signup" />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
