import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase/config";
import { onAuthStateChanged} from "firebase/auth";
import { LoginWithGoogle } from "../firebase/auth";
import {
  RegisterWithEmailAndPassword,
  LoginWithEmailAndPassword,
} from "../firebase/auth";

// [#007AFF]
function Signup() {
  const navigate = useNavigate();
  // const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  useEffect(() => {
    if (user && user.emailVerified) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await LoginWithEmailAndPassword(email, password);
      alert("Logged in successfully!");
    } catch (loginError) {
      if (loginError.message.includes("verify your email")) {
        alert(loginError.message);
      } else {
        try {
          const userCredential = await RegisterWithEmailAndPassword(
            email,
            password
          );
          alert("Account created! Please check your email for verification.");
        } catch (registerError) {
          alert("Error: " + registerError.message);
        }
      }
    }
  };
  const GoogleLogin = async (e) => {
    e.preventDefault();
    try {
      const cred = await LoginWithGoogle();
      navigate("/home"); 
      console.log(cred);
      
      alert("Logged in with Google!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  return (
    <div className="flex md:flex-row flex-col justify-start items-center h-screen w-screen bg-[#F2F2F7]">
      <div className="md:w-1/2 p-2 md:p-0 w-full h-full flex flex-col items-center justify-center">
        <div className="md:w-2/3 pb-4 flex flex-col items-center justify-center bg-white rounded-lg border  border-slate-300">
          <h1 className="text-xl w-full text-center p-3 mb-2 border-b-1 border-slate-300">
            Log in or Sign up
          </h1>
          <form className="p-4 px-7">
            <p className="mb-4 text-2xl">Welcome to Stayio</p>
            <input
              type="text"
              placeholder="Username"
              className="outline-none rounded-t-xl border border-gray-300 p-2 w-full"
            />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
              className="outline-none border border-gray-300 p-2 w-full border-t-0 border-b-0"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              className="outline-none border border-gray-300 p-2 w-full rounded-b-xl mb-4"
            />
            <button
              className="bg-[#007AFF] text-white p-2 w-full rounded-md hover:opacity-90"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </form>
          <div className="w-full px-7">
            <p className="text-center mb-2">or</p>
            <div className="w-full text-center p-2 border rounded-md  hover:bg-gray-100" onClick={GoogleLogin}>
              <p>Continue with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
